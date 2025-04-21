<template>
    <div id="work" class="w-screen h-screen flex flex-col justify-between items-center snap-start">
        <div class="w-full lg:w-2/3 h-full bg-pink-700">
            <div class="flex flex-col items-center justify-center min-h-screen">
                <div :style="{
                    transition: `transform ${ease}`,
                    transform: state
                        ? 'translateX(-100%)'
                        : 'translateX(100%) rotate(180deg)',
                }" class="w-24 h-24 bg-teal-200 rounded-md" />
                <button class="mt-10 px-4 py-2 bg-teal-200 text-gray-900 rounded-md" @click="state = !state">
                    Toggle position
                </button>
            </div>


        </div>
    </div>
</template>
<script setup lang="ts">
import { useSnapScroll } from '~/composables/useSnapScroll'
useSnapScroll(4)   // 1.4 seconds tween

import { spring } from "motion-v";
import { ref } from 'vue'

const state = ref(true)
const ease = spring(0.5, 0.8)

</script>
