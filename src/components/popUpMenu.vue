<script setup lang="ts">
    import { ref, defineProps, watch } from "vue";

    const props = defineProps<{
        links: links[]
    }>();

    const isVisible = ref<boolean>(false);
    const windowWidth = ref(window.innerWidth);
    
    const toggleVisible = () => {
        isVisible.value = !isVisible.value
    }


    watch(isVisible, (value) => {
      document.documentElement.style.overflow = value ? 'hidden' : 'auto';
    });

    watch(windowWidth, (value) => {
        if (value >= 1025) {
            isVisible.value = false
        }
    })


</script>

<template>
    <button class="p-2 m-4 z-[200] fixed bottom-0 right-0" :class="!isVisible ? 'shadow-md backdrop-filter backdrop-blur-2xl rounded' : ''" @click="toggleVisible">
        <Transition name="icon-fade" mode="out-in">
            <svg 
                v-if="!isVisible" 
                key="hamburger"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor"
                class="size-12"
            >
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg 
                v-else
                key="close"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor"
                class="size-12"
            >
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12" />
            </svg>
        </Transition>
    </button>
    <div 
        class="fixed flex justify-center items-center inset-0 bg-white/10 shadow-md backdrop-blur-xl z-[100] transition-opacity duration-300"
        :class="isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'">

        <section class="flex flex-col justify-center items-center gap-10 transition" >
            <a href="/" @click="toggleVisible" class="inline-flex items-center gap-2 text-white font-nexaBold text-4xl hover:text-red-500 transition-all py-5 px-20">Domů</a>
            <div v-for="link in props.links" class="relative flex flex-row">
                <a 
                  :href="link.href"
                  @click="toggleVisible"
                  class="inline-flex items-center gap-2 text-white font-nexaBold text-4xl hover:text-red-500 transition-all py-5 px-20 -pr-1"
                >
                    {{ link.label }}

                    <svg 
                      v-if="link.external"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>

                </a>
            </div>
            <a href="/#contact" @click="toggleVisible" class="inline-flex items-center gap-2 text-white font-nexaBold text-4xl hover:text-red-500 transition-all py-5 px-20">Kontakt</a>
        </section>
    </div>
</template>


<style scoped>
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.15s ease;
}

.icon-fade-enter-from,
.icon-fade-leave-to {
  opacity: 0;
  transform: scale(0.7) rotate(-20deg);
}

.icon-fade-enter-to,
.icon-fade-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
</style>
