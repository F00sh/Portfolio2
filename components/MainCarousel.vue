<template>
    <div class="relative overflow-hidden bg-transparent">
      <!-- Edge fade overlays -->
      <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3 lg:w-1/5 bg-gradient-to-r from-white to-transparent"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3 lg:w-1/5 bg-gradient-to-l from-white to-transparent"></div>
  
      <!-- Scrolling track (duplicate sets for seamless loop) -->
      <div class="group">
        <div class="flex w-max animate-scroll lg:animate-none lg:group-hover:animate-scroll">
          <!-- First set of cards -->
          <div v-for="n in 10" :key="n" class="flex-shrink-0 w-1/3 lg:w-1/5 px-2">
            <div class="h-40 w-full bg-white rounded-2xl shadow-lg"></div>
          </div>
          <!-- Duplicate set for seamless looping -->
          <div v-for="n in 10" :key="'dup-' + n" class="flex-shrink-0 w-1/3 lg:w-1/5 px-2">
            <div class="h-40 w-full bg-white rounded-2xl shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // No script logic needed for perpetual CSS animation
  </script>
  
  <!--
    Tailwind CSS v4.0 additions (add to your tailwind.config.ts):
  
    export default {
      theme: {
        extend: {
          keyframes: {
            scroll: {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-50%)' },
            },
          },
          animation: {
            scroll: 'scroll 20s linear infinite',
          },
        },
      },
    }
  -->
  