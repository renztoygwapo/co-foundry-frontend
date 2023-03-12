import { defineStore } from 'pinia'

export const useUtilStore = defineStore('util', {
  state: () => ({
    layoutAction: ''
  }),
  actions: {
    async selectLayoutAction (payload: any) {
        this.layoutAction = payload
      }
  }
})
