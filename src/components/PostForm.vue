<template>
  <form @submit.prevent>
    <h4>create post</h4>
    <MyInput
        v-focus
        type="text"
        v-model="post.title"
        placeholder="title"
    />
    <MyInput
        type="text"
        v-model="post.body"
        placeholder="description"
    />
    <MyButton
        type="submit"
        style="align-self: flex-end; margin-top: 15px"
        @click="createPost"
    >
      Add new
    </MyButton>
  </form>
</template>

<script>

export default {
  name: "PostForm",
  data: () => ({
    post: {
      title: '',
      body: '',
    },
  }),
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', {...this.post})
      this.post.title = '';
      this.post.body = '';
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>