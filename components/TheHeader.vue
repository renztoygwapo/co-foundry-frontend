<template>
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex items-center gap-x-12">
          <div class="hidden lg:flex lg:gap-x-12">
            <button v-for="item in navigation" :key="item.name" :href="item.href" @click="onSelectLayout(item.value)" :class="item.value === util.layoutAction ? 'bg-indigo-500' : 'bg-indigo-200'" class="rounded-md py-2.5 px-3.5 text-sm text-white shadow-sm hover:bg-indigo-500 text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</button>
          </div>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex">
            <button @click="savePhoto" type="button" class="rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" @click="onSelectLayout(item.value)" :class="item.value === util.layoutAction ? 'bg-indigo-500' : 'bg-indigo-200'" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <a href="#" @click="savePhoto" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Save</a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue' 
  import { Dialog, DialogPanel } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { useUtilStore } from '@/store/util'

  
  const navigation = [
    { name: '1', href: '#', value: 1 },
    { name: '2', href: '#', value: 2 },
    { name: '3', href: '#', value: 3 },
  ]
  
  const mobileMenuOpen = ref(false)

  const util = useUtilStore()

  const onSelectLayout = (async (payload) => {
    await util.selectLayoutAction(payload)
  })

  const savePhoto = (async () => {
    util.toggleModal()
  })

  </script>