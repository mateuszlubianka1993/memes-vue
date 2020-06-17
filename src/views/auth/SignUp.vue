<template>
  <div class="container">
    <mdb-card class="container">
      <mdb-card-body>
        <form>
          <p class="h4 text-center py-4">Sign up</p>
          <div class="grey-text">
            <mdb-input label="Your email" group type="email" validate error="wrong" success="right"/>
            <mdb-input label="Your password" group type="password" validate/>
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
    components: {
      mdbInput,
      mdbBtn,
      mdbCard,
      mdbCardBody
    }
  }
</script>
