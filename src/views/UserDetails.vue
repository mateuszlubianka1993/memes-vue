<template>
  <section style="background: #ededed; padding-bottom: 100px">
    <mdb-edge-header color="indigo"/>
    <mdb-container free-bird>
      <mdb-row>
        <mdb-col md="8" lg="7" class="mx-auto float-none white z-depth-1 py-2 px-2">
          <mdb-card-body>
            <h2 class="h2-responsive"><strong>User Details</strong></h2>
            <p class="pb-4">Example of Material Design Form</p>
              <h5 class="h5-responsive" v-if="nick">Nick: {{nick}}</h5>
              <h5 class="h5-responsive" v-if="email">Email: {{email}}</h5>
              <h5 class="h5-responsive" v-if="age">Age: {{age}}</h5>
              <h5 class="h5-responsive" v-if="country">Country: {{country}}</h5>
          </mdb-card-body>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </section>
</template>

<script>
  import { mdbEdgeHeader, mdbContainer, mdbRow, mdbCol, mdbCardBody} from 'mdbvue';

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
      mdbCardBody
    }
}
</script>
