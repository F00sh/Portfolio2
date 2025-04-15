<template>
    <!-- FOOTER -->
    <footer
      class="fixed bottom-0 left-0 w-full transition-transform duration-300 ease-in-out
             text-center flex items-center justify-center bg-my-orange-normal text-my-blue-normal
             h-16 md:h-20 text-xl md:text-3xl font-sarpanch uppercase"
      :class="{ 
        'translate-y-0': isAtBottom,
        'translate-y-full': !isAtBottom
      }"
    >
      footer
    </footer>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  
  // Tracks scrolling direction and whether we’re at the bottom
  const isScrollingDown = ref(false)
  const isAtBottom = ref(false)
  
  let lastScrollY = 0
  
  const handleScroll = () => {
    const currentScrollY = window.scrollY || 0
  
    // Determine scroll direction
    isScrollingDown.value = currentScrollY > lastScrollY
    lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY
  
    // Check if the user is fully at the bottom
    const windowHeight = window.innerHeight
    const documentHeight = document.body.offsetHeight
    isAtBottom.value = (window.scrollY + windowHeight >= documentHeight)
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  