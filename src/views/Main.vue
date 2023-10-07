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
    toggle: '',
  }),
  methods: {}
}
</script>

<style scoped></style>
