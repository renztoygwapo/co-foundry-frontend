<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- cropper -->
            <cropper
                v-if="photoPath"
                class="cropper"
                :src="photoPath"
                :stencil-props="{
                    aspectRatio: 10/12
                }"
                @change="cropImg"
            />
            <!-- <img v-if="photoPath" :src="photoPath" alt="" class="relative inset-0 -z-10 h-full w-full object-cover" /> -->
            <button @click="fileOPen" type="button" class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <svg class="mx-auto h-12 w-12 text-gray-400"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span class="mt-2 block text-sm font-semibold text-gray-900">Photo 1</span>
            <input type="file" id="file" style="display: none" @change="onSelectPhoto" />
            <p class="text-xs text-gray-400 mt-2">Browse Photo Here</p>
            </button>
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
const img = ref('https://images.pexels.com/photos/4323307/pexels-photo-4323307.jpeg')
const publicUrl = ref('')
// triggered file open function
const fileOPen = (async () => {
    document.getElementById('file').click()
})

// selecting photo action
const onSelectPhoto = (async (e) => {
    const file = e.target.files[0]
    photo.value = file
    photoPath.value = URL.createObjectURL(file)

    const formData = new FormData();
    formData.append('image', photo.value);
    util.uploadPhoto('http://co-foundry-api.test/api/image', formData)
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
