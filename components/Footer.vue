<template>
    <div class="fixed flex items-center justify-center bottom-0 left-0 w-full h-20 text-center bg-my-blue-normal transition-transform duration-300 ease-in-out"
    :class="{
      'translate-y-0': isAtBottom,
      'translate-y-full': !isAtBottom
    }">
        footer
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrollingDown = ref(false)
const isAtBottom = ref(false)

let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY || 0
  // Determine scroll direction
  isScrollingDown.value = currentScrollY > lastScrollY
  lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY

  // Check if the user is fully at the bottom of the page
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