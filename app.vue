<template>
  <div class="bg-gradient-to-t from-my-blue-light to-my-blue-dark h-screen w-screen flex flex-col justify-between overflow-x-hidden snap-y scrollbar-none scroll-smooth snap-mandatory">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
    <NuxtPage />
    </NuxtLayout>>
    
  </div>
</template>
<script setup lang="ts">
import { useSnapScroll } from '~/composables/useSnapScroll'
useSnapScroll(4)   // 1.4 seconds tween
</script>