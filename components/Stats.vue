<template>
  <div class="stats">
    <span v-if="listing.num_comments" class="stats__comments">{{ listing.num_comments }} comments -</span>
    <span class="stats__ups">{{ listing.ups }} upvotes</span>
  </div>
</template>
<script>
export default {
  props: ["listing"]
};
</script>
<style lang="scss">
.stats {
  color: #aaa;
  margin-top: 5px;
}
</style>
