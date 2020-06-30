<template>
  <div class="home">
    <div class="header-box animated slideInUp">
      <h1>Vue Memes App</h1>
      <router-link to="/memes"><mdb-btn color="elegant">See memes</mdb-btn></router-link>
    </div>
  </div>
</template>

<script>
import { mdbBtn } from 'mdbvue';

export default {
  name: 'Home',
  created() {
    this.$store.dispatch('getMemes');
  },
  components: {
    mdbBtn
  }
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  // Zdjęcie autorstwa Miguel Á. Padriñán z Pexels
  background-image: url('../assets/bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
