<template>
  <div class="home">
    Memes Vue App
  </div>
</template>

<script>

export default {
  name: 'Home',
  created() {
    this.$store.dispatch('getMemes');
  }
}
</script>
