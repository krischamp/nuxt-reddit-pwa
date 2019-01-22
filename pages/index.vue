<template>
  <ul v-if="posts" class="posts__container">
    <li v-for="(post, index) in posts" :key="index" class="posts__item">
      <listing :listing="post"></listing>
    </li>
  </ul>
</template>

<script>
import { getNewPosts } from "~/services/redditClient.js";
import Listing from "~/components/Listing";
export default {
  components: {
    Listing
  },
  data() {
    return {
      posts: null
    };
  },
  mounted: async function() {
    this.posts = await getNewPosts("pwa");
  }
};
</script>
<style lang="scss">
.posts {
  &__container {
    width: 100%;
    @media (min-width: 992px) {
      width: 70%;
    }
    background-color: #fff;
    padding: 0;
  }

  &__item {
    list-style: none;
    padding: 10px 10px;
    border-bottom: 1px solid #ccc;
    min-height: 100px;
    cursor: pointer;
  }
}
</style>
