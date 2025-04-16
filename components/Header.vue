<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
      <Flipcard />
    </div>
  
    <!-- SVG with scrolling background repeated 4 times horizontally -->
    <div class="w-full h-4 flex justify-center items-center overflow-hidden">
        <svg
        class="h-5 lg:w-1/4
                
                bg-[url('/svg/traka.svg')]
                bg-repeat-x
                bg-[length:200%_auto]
                lg:bg-[length:200%_auto]
                animate-scrollingBg"
        ></svg>
        <svg
        class="h-5 lg:w-1/4
                
                bg-[url('/svg/traka.svg')]
                bg-repeat-x
                bg-[length:200%_auto]
                lg:bg-[length:200%_auto]
                animate-scrollingBg"
        ></svg>
    </div>
 
   
  </template>
  
  <!-- IMPORTANT: Do NOT use 'scoped' here, or it may break the keyframes -->
  <style>
  @keyframes scrollingBg {
    0% {
      /* Start from background's “far left” */
      background-position-x: 0%;
    }
    100% {
      /* Shift 100% of the 400%-wide background, giving a full scroll cycle */
      background-position-x: 100%;
    }
  }
  
  /* Attach the custom keyframes to the .animate-scrollingBg class */
  .animate-scrollingBg {
    animation: scrollingBg 15s linear infinite;
  }
  </style>
  