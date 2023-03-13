<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div v-for="photo in photos" :key="photo.name" class="relative flex items-center space-x-3 rounded-lg bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
            <div class="min-w-0 flex-1">
                <p class="text-sm font-medium text-gray-900">{{ photo.name }}</p>
                <cropper
                v-if="photo.photoPath"
                class="cropper"
                :src="photo.photoPath"
                :stencil-props="{
                    aspectRatio: 10/12
                }"
                @change="cropImg"
            />
            <button @click="fileOPen(photo.code)" type="button" class="w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <svg class="mx-auto h-12 w-12 text-gray-400"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span class="mt-2 block text-sm font-semibold text-gray-900">{{  photo.name }}</span>
            <input type="file" :id="`file-${photo.code}`" style="display: none" @change="onSelectPhoto" />
            <p class="text-xs text-gray-400 mt-2">Browse Photo Here</p>
            </button>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUtilStore } from '@/store/util'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

const util = useUtilStore()
const photo = ref('')
const photoPath = ref('')
const selectedCode = ref(1)
const publicUrl = ref('')
// triggered file open function
const fileOPen = (async (code) => {
    document.getElementById(`file-${code}`).click()
    const selectedPhoto = photos.value.find( el => el.code === code)
    console.log(selectedPhoto)
    selectedCode.value = code
})

const photos = ref([
  {
    code: 1,
    name: 'Photo 1',
    photoPath: ''
  },
  {
    code: 2,
    name: 'Photo 2',
    photoPath: ''
  },
  {
    code: 3,
    name: 'Photo 3',
    photoPath: ''
  }
])

// selecting photo action
const onSelectPhoto = (async (e) => {
    const file = e.target.files[0]
    photo.value = file
    // photoPath.value = URL.createObjectURL(file)
    console.log(photos[selectedCode.value - 1])

    photos.value[selectedCode.value - 1].photoPath = URL.createObjectURL(file)


    // const formData = new FormData();
    // formData.append('image', photo.value);
    // util.uploadPhoto('http://co-foundry-api.test/api/image', formData)
})

// cropper img
const cropImg = (async ({ coordinates, canvas }) => {
    util.setImage(`http://co-foundry-api.test/image/${coordinates.width}/${coordinates.height}/${coordinates.left}/${coordinates.top}`, coordinates)
})
</script>

<style>
.cropper {
	height: 100%;
	width: 100%;
	background: #DDD;
}
</style>
