<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
}
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  border: 2px solid teal;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  color: teal;
  font-weight: 800;
}
</style>