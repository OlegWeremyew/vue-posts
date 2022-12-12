<template>
  <div class="app">
    <h2>Page with posts</h2>
    <MyInput
        v-focus
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Search..."
        type="text"
    />
    <div class="app__btns">
      <MyButton
          @click="showDialog"
          style="margin-left: -10px;"
      >
        Create Post
      </MyButton>
      <MySelect
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortOptions"
      />
    </div>
    <MyDialog v-model:show="dialogVisible">
      <PostForm @create="createPost"/>
    </MyDialog>
    <PostList
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <div v-else>Loading in process...</div>
    <div v-intersections="loadMorePosts" class="observer"></div>
  </div>

</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
  name: "PostsPage",
  components: {MyInput, MySelect, MyButton, MyDialog, PostForm, PostList},
  data: () => ({
    dialogVisible: false,
  }),
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
    createPost(newPost) {
      this.posts.push(newPost);
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      sortOptions: state => state.post.sortOptions,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
    }),
    ...mapGetters({
      sortedPost: 'post/sortedPost',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),
  },
  watch: {},
}
</script>


<style scoped>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0 15px 10px
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
  margin-left: 2px;
  border-radius: 3px;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: transparent;
}

</style>