// composables/useSnapScroll.ts
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

export function useSnapScroll(duration = 1.2) {
  const sections = ref<HTMLElement[]>([])
  let index = 0

  const scrollTo = (i: number) => {
    index = (i + sections.value.length) % sections.value.length
    gsap.to(window, {
      duration,
      scrollTo: { y: sections.value[index], autoKill: false },
      ease: 'power2.inOut',
      onStart() {
        // turn snap off while we tween
        document.documentElement.style.scrollSnapType = 'none'
      },
      onComplete() {
        document.documentElement.style.scrollSnapType = 'y mandatory'
      }
    })
  }

  onMounted(() => {
    sections.value = Array.from(document.querySelectorAll('section.h-screen'))
    window.addEventListener('wheel', (e) => {
      if (gsap.isTweening(window)) return
      scrollTo(index + (e.deltaY > 0 ? 1 : -1))
    })
  })
}
