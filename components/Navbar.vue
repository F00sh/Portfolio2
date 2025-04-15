<template>
    <div class="fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out"
    :class="{ '-translate-y-full': isScrollingDown, 'translate-y-0': !isScrollingDown }">
        <ul class="flex justify-around items-center text-my-orange-normal uppercase tracking-[0.1rem] p-4 m-auto mt-10 w-full h-16 font-sarpanch">
            <li class=
               "absolute lg:left-180 left-10
                hover:cursor-pointer
                hover:tracking-[0.3rem]
                duration-150
                hover:text-my-orange-light">
                about me
            </li>
            <li class=
               "absolute
                hover:cursor-pointer
                hover:tracking-[0.3rem]
                duration-150
                hover:text-my-orange-light">
                portfolio
            </li>
            <li class=
               "absolute lg:right-180 right-10
                hover:cursor-pointer
                hover:tracking-[0.3rem]
                duration-150
                hover:text-my-orange-light">
                contact
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Tracks whether we’re scrolling down (hide navbar),
 * and whether we’re near the bottom of the page (show footer).
 */
const isScrollingDown = ref(false)
const showFooter = ref(false)

// Keep track of the last scroll position for direction detection
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY || 0

  // Determine scroll direction
  isScrollingDown.value = currentScrollY > lastScrollY
  lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY

  // Check if near bottom of page
  const buffer = 100 // how close to bottom before showing footer
  const windowHeight = window.innerHeight
  const documentHeight = document.body.offsetHeight

  showFooter.value = window.scrollY + windowHeight >= documentHeight - buffer
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>