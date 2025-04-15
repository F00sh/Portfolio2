<template>
    <div class="h-screen flex flex-col justify-between bg-gray-900 text-white">
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>
<script setup lang="ts">
    import Navbar from '~/components/Navbar.vue';
    import Footer from '~/components/Footer.vue';
</script>