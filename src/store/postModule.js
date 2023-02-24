import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],
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
  getters: {
    sortedPost(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      })
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPost.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setLoading(state, status) {
      state.isPostLoading = status
    },
    setPage(state, page) {
      state.page = page
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
  },
  actions: {
    async fetchPosts({state, commit}) {
      try {
        commit('setLoading', true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          }
        })
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        commit('setPosts', response.data)
        commit('setLoading', false)
      } catch (e) {
        alert(`Error: ${e.message}`)
      }
    },
    async loadMorePosts({state, commit}) {
      try {
        commit('setPage', state.page + 1)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: state.page,
            _limit: state.limit,
          }
        })
        commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
        commit('setPosts', [...state.posts, ...response.data])
      } catch (e) {
        alert(`Error: ${e.message}`)
      }
    },
  },
  namespaced: true
}