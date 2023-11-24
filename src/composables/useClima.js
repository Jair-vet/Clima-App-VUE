import { computed, ref } from 'vue'
import axios from 'axios'

export default function useClima(){

    const clima = ref({})
    const cargando = ref(false)

    const obtenerClima = async ({ciudad, pais}) => {
        // Importar apiKey
        const key = import.meta.env.VITE_API_KEY
        cargando.value = true

        try{
            // Obtener la lat y lng
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${key}`
            const { data } = await axios(url)

            const { lat, lon } = data[0]

            // Obtener el clima
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            const { data: resultado } = await axios(urlClima)
            clima.value = resultado

        }catch (error){
            console.log(error);
        } finally {
            cargando.value = false
        }

    }


    const mostrarClima = computed(() => {
        return Object.values(clima.value).length > 0
    })


    const formatearTemp = temperatura => parseInt(temperatura - 273.15)


    return {
        obtenerClima,
        clima,
        mostrarClima,
        formatearTemp,
        cargando
    }
}


