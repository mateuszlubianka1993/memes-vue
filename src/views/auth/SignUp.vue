<template>
  <div class="container">
    <mdb-card class="container">
      <mdb-card-body>
        <form @submit.prevent="onFormSubmit">
          <p class="h4 text-center py-4">Sign up</p>
          <div class="grey-text">
            <mdb-input v-model="email" label="Your email" group type="email" validate error="wrong" success="right"/>
            <mdb-input v-model="password" label="Your password" group type="password" validate/>
            <mdb-input v-model="nick" label="Your nick" group type="text" validate/>
            <mdb-input v-model="age" label="Your age" group type="number" validate/>
            <mdb-input v-model="country" label="Your country" group type="text" validate/>
          </div>
          <div class="text-center py-4 mt-3">
            <mdb-btn color="cyan" type="submit">Register</mdb-btn>
          </div>
        </form>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>

<script>
  import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from 'mdbvue';

  export default {
    name: 'SignUp',
    data() {
      return {
        email: '',
        password: '',
        nick: '',
        age: '',
        country: ''
      }
    },
    methods: {
      onFormSubmit() {
        const userData = {
          email: this.email,
          password: this.password,
          nick: this.nick,
          age: this.age,
          country: this.country
        };

        console.log(userData);
        this.$store.dispatch('signUp', userData)
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
