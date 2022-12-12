<template>
  <nav class="nav">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/posts">Posts</router-link>
    <router-link class="link" to="/store">Posts Store</router-link>
    <router-link class="link" to="/images">Images</router-link>
    <!--
    //для примера как через кнопку
    <MyButton class="link__btn" @click="$router.push('/images')">Images</MyButton>
    -->
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 15px;
  background-color: teal;
}

.link {
  color: #FFF;
  padding: 10px 15px;
  margin-left: 10px;
  border: 1px solid #fff;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s linear;
  background-color: teal;
}

.link:hover {
  border: 1px solid teal;
  color: teal;
  background: #FFFFFF;
}

</style>