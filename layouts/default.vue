<template>
    <div class="bg-gradient-to-t from-my-blue-light to-my-blue-dark h-screen flex flex-col justify-between">
        <Navbar />
        <slot />
        <Footer />
    </div>
</template>
<script setup lang="ts">
    import Navbar from '~/components/Navbar.vue';
    import Footer from '~/components/Footer.vue';
</script>