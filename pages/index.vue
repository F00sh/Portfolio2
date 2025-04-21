<template>
    <div class="bg-gradient-to-t from-my-blue-light to-my-blue-dark flex flex-col justify-between scroll-smooth">
        <motion.div class="w-10 h-10 bg-red-500" :animate="{ rotate: 45 }" />
        <Main />
        <About />
        <Work />
    </div>
</template>
<script setup lang="ts">
import Header from '~/components/Header.vue';
import Hero from '~/components/Hero.vue';
import { motion } from "motion-v";
</script>
