<template>
  <div class="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>

  </div>

</template>

<script>


import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {Navbar},
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f5e6e6;
}

.container {
  padding: 15px 25px;
  max-width: 1200px;
  margin: 0 auto 0;
  border-left: 2px solid teal;
  border-right: 2px solid teal;
  min-height: 100vh;
}

</style>