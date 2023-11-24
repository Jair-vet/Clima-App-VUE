<script setup>
    import useClima from '../composables/useClima';
    const { formatearTemp } = useClima()

    defineProps({
        clima: {
            type: Object,
            required: true
        }
    })

</script>



<template>
    <div class="resultado">
        <h2 class="text-5xl font-black p-12">Clima de: {{ clima.name }}</h2>
        <p class="actual">{{ formatearTemp(clima.main.temp) }}&deg;C</p>
        <div class="temperaturas mb-5">
            <p>Min: {{ formatearTemp(clima.main.temp_min) }}<span>&deg;C</span></p>
            <p>Max: {{ formatearTemp(clima.main.temp_max) }}<span>&deg;C</span></p>
        </div>
    </div>
</template>

