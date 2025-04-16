<template>
    <div class="bg-gradient-to-t from-my-blue-light to-my-blue-dark h-screen flex flex-col justify-between">
        <div class="flex flex-col h-1/2 items-center justify-center">
            <Header />
        </div>
        <div>
            <MainCarousel />
        </div>
        <div class="flex flex-col items-center justify-center h-1/2">
            <Hero />
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from '~/components/Header.vue';
import Hero from '~/components/Hero.vue';

</script>
