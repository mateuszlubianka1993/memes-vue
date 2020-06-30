<template>
  <mdb-footer color="elegant-color" class="font-small main-footer">
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="https://github.com/mateuszlubianka1993/memes-vue"> Memes Vue App </a>
      </mdb-container>
    </div>
  </mdb-footer>
</template>

<script>
  import { mdbFooter, mdbContainer } from 'mdbvue';
  export default {
    name: 'Footer',
    components: {
      mdbFooter,
      mdbContainer
    }
  }
</script>

<style lang="scss" scoped>
.main-footer {
  margin-top: 0 !important;
}
</style>
