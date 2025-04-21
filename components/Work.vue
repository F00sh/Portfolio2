<template>
    <div id="work" class="w-screen h-screen flex flex-col justify-between items-center snap-start">
        <div class="w-full lg:w-2/3 h-full bg-pink-700">

        </div>
    </div>
</template>
<script setup lang="ts">
import { useSnapScroll } from '~/composables/useSnapScroll'
useSnapScroll(4)   // 1.4 seconds tween
</script>