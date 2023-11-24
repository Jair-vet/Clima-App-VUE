<script setup>
    const paises = [
        { codigo: 'US', nombre: 'Estados Unidos' },
        { codigo: 'MX', nombre: 'México' },
        { codigo: 'AR', nombre: 'Argentina' },
        { codigo: 'CO', nombre: 'Colombia' },
        { codigo: 'CR', nombre: 'Costa Rica' },
        { codigo: 'ES', nombre: 'España' },
        { codigo: 'PE', nombre: 'Perú' }
    ]

</script>


<template>

    <form 
        className="formulario bg-transparent shadow-2xl rounded-lg py-10 px-5 md:m-0 m-4"
    >
        <!-- CITY -->
        <div class="campo">
            <label for="ciudad">City</label>
            <input 
                type="text"
                id="ciudad"
                placeholder="City"
                className="bg-transparent focus:border-none border-2 w-full p-2 mt-2 rounded-xl focus:outline-none focus:ring focus:ring-sky-300"
            />
        </div>

        <!-- Paises -->
        <div class="campo">
            <label for="pais">País</label>
            <select
                id="pais"
                className="bg-transparent focus:border-none border-2 w-full p-2 mt-2 rounded-xl focus:outline-none focus:ring focus:ring-sky-300"
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


