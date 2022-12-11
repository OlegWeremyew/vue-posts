<template>
  <div class="post">
    <div>
      <div>
        <strong>Номер поста{{ post.id }}</strong>
      </div>
      <div>
        <strong>Название:</strong> {{ post.title }}
      </div>
      <div>
        <strong>Описание: </strong> {{ post.body }}
      </div>
    </div>
    <div class="post__btns">
      <MyButton @click="$emit('remove', this.post)">Удалить</MyButton>
    </div>

  </div>
</template>

<script>

export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>