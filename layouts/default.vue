<template>
    <div class="h-screen flex flex-col justify-between text-white">
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>
<script setup lang="ts">
    import Navbar from '~/components/Navbar.vue';
    import Footer from '~/components/Footer.vue';
</script>