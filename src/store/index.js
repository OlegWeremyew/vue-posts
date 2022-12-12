import {createStore} from "vuex";
import {postModule} from "@/router/postModule";

export default createStore({
    modules: {
      post: postModule,
    },
  }
)