<template>
  <div class="app">
    <h1>Page with posts</h1>
    <MyInput
        v-focus
        v-model="searchQuery"
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
          v-model="selectedSort"
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
import axios from "axios";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";

export default {
  name: "PostsPage",
  components: {MyInput, MySelect, MyButton, MyDialog, PostForm, PostList},
  data: () => ({
    posts: [],
    dialogVisible: false,
    isPostLoading: false,
    selectedSort: '',
    sortOptions: [
      {value: 'title', name: 'On title',},
      {value: 'body', name: 'On description',},
    ],
    searchQuery: '',
    page: 1,
    limit: 10,
    totalPages: 0,
  }),
  methods: {
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
    async fetchPosts() {
      try {
        this.isPostLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
        this.isPostLoading = false
      } catch (e) {
        alert(`Error: ${e.message}`)
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        alert(`Error: ${e.message}`)
      }
    },
    //уберём пока пагинацию
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    //   //this.fetchPosts()
    // },
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPost.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
  },
  watch: {
    // page(){
    //   this.fetchPosts()
    // },
  },
}
</script>


<style scoped>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0 15px 10px
}

.observer {
  height: 30px;
  background: transparent;
}

</style>