<template>
  <section style="background: #ededed; padding-bottom: 100px">
    <mdb-edge-header color="elegant"/>
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none white z-depth-1 py-2 px-2 z-depth-5 animated slideInUp">
          <mdb-card-body>
            <h2 class="h2-responsive"><strong>Youre profile</strong></h2>
            <h2><mdb-icon icon="user-alt" /></h2>
            <p class="pb-4">Some details about your profile.</p>
              <h5 class="h5-responsive text-left" v-if="nick">Nick: {{nick}}</h5>
              <h5 class="h5-responsive text-left" v-if="email">Email: {{email}}</h5>
              <h5 class="h5-responsive text-left" v-if="age">Age: {{age}}</h5>
              <h5 class="h5-responsive text-left" v-if="country">Country: {{country}}</h5>
          </mdb-card-body>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </section>
</template>

<script>
  import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody, mdbIcon} from 'mdbvue';

export default {
  name: 'UserDetails',
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    },
    nick() {
      return !this.$store.getters.user ? false : this.$store.getters.user.nick;
    },
    age() {
      return !this.$store.getters.user ? false : this.$store.getters.user.age;
    },
    country() {
      return !this.$store.getters.user ? false : this.$store.getters.user.country;
    }
  },
  created() {
    this.$store.dispatch('getUser')
  },
    components: {
      mdbEdgeHeader,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCardBody,
      mdbIcon
    }
}
</script>
