<template>
    <!-- FOOTER -->
    <footer
      class="fixed bottom-0 left-0 w-full z-50
             flex items-center justify-center text-center
             bg-gradient-to-tr from-my-orange-light to-my-orange-dark text-my-blue-normal
             transition-transform duration-300 ease-in-out
             h-30 md:h-50 text-3xl lg:text-5xl
             font-sarpanch uppercase font-light"
      :class="{ 
        'translate-y-0': showFooter,
        'translate-y-full': !showFooter
      }"
    >
      footer
    </footer>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const showFooter = ref(false)
  
  // Track scroll direction
  let lastScrollY = 0
  
  const handleScroll = () => {
    const currentScrollY = window.scrollY || 0
    const isScrollingDown = currentScrollY > lastScrollY
    lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY
  
    // We'll show the footer if scrolling down and near bottom
    // and hide it if scrolling up.
    const buffer = 50 // how many px from bottom to trigger
    const windowHeight = window.innerHeight
    const documentHeight = document.body.offsetHeight
    const nearBottom = (window.scrollY + windowHeight >= documentHeight - buffer)
  
    if (isScrollingDown && nearBottom) {
      // Scrolling down + near bottom => show footer
      showFooter.value = true
    } else if (!isScrollingDown) {
      // Any scroll up => hide footer
      showFooter.value = false
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  