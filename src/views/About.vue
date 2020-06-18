<template>
  <div class="about">
    <h1>This is an about page</h1>
     <span v-if="email">User: {{email}}</span> 
     <span v-if="nick">Nick: {{nick}}</span> 
  </div>
</template>

<script>
export default {
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    },
    nick() {
      return !this.$store.getters.user ? false : this.$store.getters.user.nick;
    }
  },
  created() {
    this.$store.dispatch('getUser')
  }
}
</script>
