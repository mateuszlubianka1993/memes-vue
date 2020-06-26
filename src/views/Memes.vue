<template>
    <div class="container">
        <h2 class="mb-4">The funniest memes on the web.</h2>
        <MemesList :memes="memes" />
    </div>
</template>

<script>
import MemesList from '@/components/MemesList.vue';

export default {
    name: 'Memes',
  data() {
    return {
      memes: this.$store.getters.memesList
    }
  },
  components: {
    MemesList
  }
}
</script>
