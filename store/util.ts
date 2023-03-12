import { defineStore } from 'pinia'

export const useUtilStore = defineStore('util', {
  state: () => ({
    layoutAction: ''
  }),
  actions: {
    async selectLayoutAction (payload: any) {
        this.layoutAction = payload
    },
    async uploadPhoto(baseUrl: any, formData: any) {
        return await $fetch(`${baseUrl}`, {
            method: 'POST',
            body: formData
        })
        .then((result) => {
            console.log(result)
        //   navigateTo(`/thankyou/${result}`)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    },
    async getPhoto(baseUrl: any) {
        return await $fetch(`${baseUrl}`, {
            method: 'GET'
        })
        .then((result) => {
            return result
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    },
  }
})
