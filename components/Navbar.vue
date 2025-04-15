<template>
    <!-- NAV CONTAINER: slides in/out based on scroll direction -->
    <nav
      class="fixed top-0 left-0 w-screen transition-transform duration-300 ease-in-out z-50"
      :class="{ '-translate-y-full': isScrollingDown, 'translate-y-0': !isScrollingDown }"
    >
      <div
        class="flex items-center px-4 md:px-8 h-16 
               text-my-orange-light uppercase tracking-[0.1rem] font-sarpanch"
      >
        <!-- DESKTOP LINKS (centered, spaced) -->
        <ul
          class="hidden md:flex mx-auto space-x-8
                 hover:cursor-pointer"
        >
          <li class="hover:tracking-[0.3rem] duration-150 hover:text-my-orange-light drop-shadow-lg">
            about me
          </li>
          <li class="hover:tracking-[0.3rem] duration-150 hover:text-my-orange-light drop-shadow-lg">
            portfolio
          </li>
          <li class="hover:tracking-[0.3rem] duration-150 hover:text-my-orange-light drop-shadow-lg">
            contact
          </li>
        </ul>
  
        <!-- MOBILE HAMBURGER / X BUTTON (visible only on mobile) -->
        <button class="md:hidden focus:outline-none ml-auto mr-5" @click="toggleMobileMenu">
          <!-- If menu is closed, show hamburger; if open, show X -->
          <span v-if="!mobileMenuOpen">
            <!-- Three lines icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-8 h-8 drop-shadow-lg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
          <span v-else>
            <!-- X icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-8 h-8 drop-shadow-lg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>
  
      <!-- MOBILE MENU (slides down under navbar) -->
      <!-- Only visible if `mobileMenuOpen` is true -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-gradient-to-tr from-my-orange-light/70 to-my-orange-dark/50 backdrop-blur-md text-my-orange-light font-sarpanch uppercase tracking-[0.1rem] mx-20 py-10 rounded-4xl drop-shadow-xl">
        <ul class="flex flex-col items-center space-y-8 py-4">
          <li
            class="hover:cursor-pointer hover:tracking-[0.3rem] 
                   duration-150 hover:text-my-orange-light drop-shadow-lg"
            @click="toggleMobileMenu"
          >
            about me
          </li>
          <li
            class="hover:cursor-pointer hover:tracking-[0.3rem] 
                   duration-150 hover:text-my-orange-light drop-shadow-lg"
            @click="toggleMobileMenu"
          >
            portfolio
          </li>
          <li
            class="hover:cursor-pointer hover:tracking-[0.3rem] 
                   duration-150 hover:text-my-orange-light drop-shadow-lg"
            @click="toggleMobileMenu"
          >
            contact
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const isScrollingDown = ref(false)
  let lastScrollY = 0
  
  const handleScroll = () => {
    const currentScrollY = window.scrollY || 0
    isScrollingDown.value = currentScrollY > lastScrollY
    lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  const mobileMenuOpen = ref(false)
  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }
  </script>
  
  <style scoped>
  /* Optional: You can add further transition effects for the dropdown. */
  </style>
  