<template>
  <span class="listing" :href="listing.permalink">
    <div class="listing__thumbnail">
      <img v-if="listing.thumbnail !== 'self'" :src="listing.thumbnail">
    </div>
    <div class="listing__content">
      <Details :listing="listing"/>
      <div class="listing__title">{{ listing.title }}</div>
      <Stats :listing="listing"/>
    </div>
  </span>
</template>

<script>
import Details from "./Details";
import Stats from "./Stats";

export default {
  components: {
    Details,
    Stats
  },
  props: ["listing"]
};
</script>

<style lang="scss">
.listing {
  @media (min-width: 992px) {
    font-size: 25px;
  }
  font-size: 14px;

  &__thumbnail {
    width: 30%;
    display: inline-block;
    img {
      width: 100%;
    }
  }

  &__content {
    margin-left: 2%;
    width: 65%;
    display: inline-block;
    vertical-align: top;
  }

  &__title {
    font-weight: bold;
  }
}
</style>
