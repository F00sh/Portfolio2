<template>
    <!-- 
      Conditionally apply "group" only if we're not on mobile, so that 
      hover-based flipping works in desktop mode. 
      Conversely, on mobile, we remove hover styling and set a cursor if desired.
    -->
    <div
      :class="[
        'relative w-full h-full perspective font-oxanium',
        isMobile ? 'hover:cursor-default' : 'group hover:cursor-pointer'
      ]"
    >
      <!-- The flipping element -->
      <div
        class="relative w-full h-full rounded-xl
               transition-transform duration-800 [transform-style:preserve-3d]"
        :class="[
          // On desktop, flip on hover
          !isMobile ? 'group-hover:rotate-y-180' : '',
          // On mobile, flip via interval
          isMobile && isFlipped ? 'rotate-y-180' : ''
        ]"
      >
        <!-- FRONT SIDE -->
        <div
          class="absolute w-full h-full rounded-xl backface-hidden 
                 flex items-center justify-center text-my-orange-light
                 tracking-[0.5rem]"
        >
          <h2 class="text-8xl font-light drop-shadow-xl">cvilipić</h2>
        </div>
  
        <!-- BACK SIDE -->
        <div
          class="absolute w-full h-full rounded-xl backface-hidden 
                 rotate-y-180 flex items-center justify-center text-my-green-light
                 tracking-[0.5rem]"
        >
          <h2 class="text-8xl font-light text-center drop-shadow-xl">art & design</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  const MOBILE_BREAKPOINT = 640
  
  // Detect if we're in mobile
  const isMobile = ref(false)
  
  // For mobile auto-flip
  const isFlipped = ref(false)
  
  onMounted(() => {
    // Check viewport width
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
  
    // If mobile, flip automatically every 3s
    if (isMobile.value) {
      setInterval(() => {
        isFlipped.value = !isFlipped.value
      }, 3000)
    }
  })
  </script>
  