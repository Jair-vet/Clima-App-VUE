<script setup>
  import Formulario from './components/Formulario.vue'
  import Clima from './components/Clima.vue'
  import useClima from './composables/useClima';
  import Spinner from './components/Spinner.vue'

  const { obtenerClima, clima, mostrarClima, cargando } = useClima()

</script>

<template>
  <h1 class="text-6xl mt-20 text-center font-bold">Buscador de Clima</h1>
  
  <div class="contenedor buscador-clima">
    <Formulario 
      @obtener-clima="obtenerClima"
    />

    <Spinner  v-if="cargando"/>

    <Clima 
      v-if="mostrarClima"
      :clima="clima"
    />
  </div>


</template>

