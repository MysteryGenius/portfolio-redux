<template>
  <div class="bg-stone-900">
    <Title>Jodie's Portfolio</Title>
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5 text-2xl text-white font-bold">
            Jodie
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-stone-100"
          >
            {{ item.name }}
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-stone-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="/" class="-m-1.5 p-1.5 text-2xl text-white font-bold">
              Jodie
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-stone-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-stone-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-stone-100 hover:bg-stone-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6"></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <div class="relative isolate px-6 pt-14 md:pt-0 lg:px-8 min-h-screen">
      <div class="mx-auto max-w-4xl py-0 sm:py-16 lg:py-40 text-stone-200">
        <slot />
      </div>
    </div>

    <footer class="text-center text-white py-6">
      <p>Made with ❤️ by &copy;Jodie 2023</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { Dialog, DialogPanel } from "@headlessui/vue";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/contact" },
];

const mobileMenuOpen = ref(false);
const route = useRoute();

watch(
  route,
  () => {
    mobileMenuOpen.value = false;
  },
  { deep: true, immediate: true }
);
</script>
<style scoped></style>
