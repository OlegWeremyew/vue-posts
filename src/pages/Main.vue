<template>
  <input
      type="checkbox"
      v-model="toggle"
      true-value="да"
      false-value="нет"
  >
  {{toggle}}
  </template>
<script>
const dataObj = {text: "oleg"}

export default {
  name: "MainPage",
  data: () => ({
    sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],
    toggle: ''
  }),
  methods: {
    greet: function (event) {
      // `this` внутри методов указывает на экземпляр Vue
      alert('Привет, ' + this.name + '!')
      // `event` — нативное событие DOM
      if (event) {
        alert(event.target.tabindex)
      }
    }
  }
}
</script>

<style scoped>

</style>