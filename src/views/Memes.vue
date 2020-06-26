<template>
    <div class="container">
        Memes
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
