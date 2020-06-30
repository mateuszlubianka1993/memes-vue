<template>
  <div class="container pt-4 pb-4">
    <mdb-card class="container z-depth-3">
      <mdb-card-body>
        <form @submit.prevent="onFormSubmit">
          <p class="h4 text-center py-4">Sign in</p>
          <div class="grey-text">
            <mdb-input v-model="email" label="Your email" group type="email" validate error="wrong" success="right"/>
            <mdb-input v-model="password" label="Your password" group type="password" validate/>
          </div>
          <div class="text-center py-4 mt-3">
            <mdb-btn color="elegant" type="submit">Login</mdb-btn>
          </div>
        </form>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
  import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from 'mdbvue';
  export default {
    name: 'SignIn',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onFormSubmit() {
        const userData = {
          email: this.email,
          password: this.password
        };

        console.log(userData);
        this.$store.dispatch('signIn', {email: userData.email, password: userData.password})
      }
    },
    components: {
      mdbInput,
      mdbBtn,
      mdbCard,
      mdbCardBody
    }
  }
</script>
