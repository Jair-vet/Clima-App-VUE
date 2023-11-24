<script setup>
    import { reactive, ref } from 'vue'
    import Alerta from './Alerta.vue'


    const busqueda = reactive({
        ciudad: '',
        pais: ''
    })

    const error = ref('')

    const emit = defineEmits(['obtener-clima'])

    const paises = [
        { codigo: 'US', nombre: 'Estados Unidos' },
        { codigo: 'MX', nombre: 'México' },
        { codigo: 'AR', nombre: 'Argentina' },
        { codigo: 'CO', nombre: 'Colombia' },
        { codigo: 'CR', nombre: 'Costa Rica' },
        { codigo: 'ES', nombre: 'España' },
        { codigo: 'PE', nombre: 'Perú' }
    ]

    const consultarClima = () => {
        if(Object.values(busqueda).includes('')){
            error.value = 'Todos los campos son obligatorios'
            setTimeout(() => {
                error.value = ''
            }, 3000)
            return
        }

        emit('obtener-clima', busqueda)
    }

</script>


<template>

    <form 
        className="formulario bg-transparent shadow-2xl rounded-lg py-10 px-5 md:m-0 m-4"
        @submit.prevent="consultarClima"
    > 

        <Alerta v-if="error">{{ error }}</Alerta>

        <!-- CITY -->
        <div class="campo">
            <label for="ciudad">City</label>
            <input 
                type="text"
                id="ciudad"
                placeholder="City"
                className="bg-transparent text-white focus:border-none border-2 w-full p-2 mt-2 rounded-xl focus:outline-none focus:ring focus:ring-sky-300"
                v-model="busqueda.ciudad"
            />
        </div>

        <!-- Paises -->
        <div class="campo">
            <label for="pais">País</label>
            <select
                id="pais"
                className="bg-transparent focus:border-none border-2 w-full p-2 mt-2 rounded-xl focus:outline-none focus:ring focus:ring-sky-300"
                v-model="busqueda.pais"
            >
                <option value="">-- Seleccione un país --</option>
                <option 
                    v-for="pais in paises" 
                    v-bind:key="pais.codigo"
                    :value="pais.codigo"
                >
                {{ pais.nombre }}
                </option>
            </select>
        </div>

        <input type="submit" class="rounded-md transition-300 hover:bg-yellow-600" value="Consultar Clima"/>
    </form>
</template>


