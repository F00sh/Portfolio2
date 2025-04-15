<template>
    <div class="group w-64 h-64 relative perspective font-oxanium cursor-none">
      <!-- Flipping element -->
      <div
        class="relative w-full h-full rounded-xl
               transition-transform duration-500 [transform-style:preserve-3d]"
        :class="isFlipped ? 'rotate-y-180' : ''"
      >
        <!-- FRONT SIDE -->
        <div
          class="absolute w-full h-full rounded-xl backface-hidden 
                 flex items-center justify-center text-my-orange-normal
                 tracking-[0.5rem]"
        >
          <h2 class="text-8xl font-bold">cvilipić</h2>
        </div>
  
        <!-- BACK SIDE -->
        <div
          class="absolute w-full h-full rounded-xl backface-hidden 
                 rotate-y-180 flex items-center justify-center text-my-orange-light
                 tracking-[0.5rem]"
        >
          <h2 class="text-7xl font-bold text-center">art & design</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  const isFlipped = ref(false)
  
  // Customize the breakpoint (e.g., 768 for tablet, 640 for mobile, etc.)
  const MOBILE_BREAKPOINT = 640
  
  onMounted(() => {
    // Detect if current width is below the mobile breakpoint
    const isMobile = window.innerWidth < MOBILE_BREAKPOINT
    if (isMobile) {
      // Toggle every 3 seconds
      setInterval(() => {
        isFlipped.value = !isFlipped.value
      }, 3000)
    }
  })
  </script>
  