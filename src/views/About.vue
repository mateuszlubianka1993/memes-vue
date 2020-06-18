<template>
  <div class="about">
    <h1>This is an about page</h1>
     <span >User: {{email}}</span> 
  </div>
</template>

<script>
export default {
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    }
  },
  created() {
    this.$store.dispatch('getUser')
  }
}
</script>
