<template>
    <div class="w-screen h-screen flex flex-col justify-between items-center snap-start">
        <div class="bg-black/80 w-full lg:w-2/3 h-full flex flex-col justify-start items-start">
            <h1></h1>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useSnapScroll } from '~/composables/useSnapScroll'
useSnapScroll(4)   // 1.4 seconds tween
</script>