<template>
  <div id="app">
    <Nav />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/signin">Sign In</router-link> 
    </div>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav';
import Footer from './components/Footer';

export default {
  components: {
    Nav,
    Footer
  },
  created() {
    this.$store.dispatch('autoLogIn');
  }
}
</script>

<style lang="scss">
body, html {
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
