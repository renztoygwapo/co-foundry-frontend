<template>
  <div>
    <TheHeader />
    <LayoutOne v-if="activeLayout === 1"/>
    <LayoutTwo v-else-if="activeLayout === 2"/>
    <LayoutThree v-else/>
  </div>
</template>

<script setup>
import { ref } from 'vue' 
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'


const activeLayout = ref(2)
</script>