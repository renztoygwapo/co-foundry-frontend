<template>
  <div>
    <TheHeader />
    <LayoutTwo v-if="util.layoutAction === 2"/>
    <LayoutThree v-else-if="util.layoutAction === 3"/>
    <LayoutOne v-else/>
  </div>
</template>

<script setup>
import { ref } from 'vue' 
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useUtilStore } from '@/store/util'

const util = useUtilStore()

const activeLayout = ref(1)

</script>