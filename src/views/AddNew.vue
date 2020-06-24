<template>
  <div class="container">
    <div class="row">
      <form class="add-form col-10 col-md-8 col-lg-6 m-auto border border-primary p-3">
        <p class="h4 text-center mb-4">Add new meme.</p>
        <div class="grey-text">
          <mdb-input type="text" label="Meme title" bg counter />
          <mdb-input type="textarea" label="Meme description" :rows="5" bg counter />
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupFileAddon01"
                >Upload</span
              >
            </div>
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
                @change="onSelect"
              />
              <label class="custom-file-label" for="inputGroupFile01"
                >Choose file</label
              >
            </div>
          </div>
        </div>
        <div class="text-center mt-3">
          <mdb-btn color="primary">Add</mdb-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";
export default {
  name: "AddNew",
  components: {
    mdbInput,
    mdbBtn,
  },
  data() {
      return {
          file: null
      }
  },
  methods: {
      onSelect(e) {
          this.file = e.target.files[0];
          console.log(this.file)
      }
  }
};
</script>

<style lang="scss" scoped></style>
