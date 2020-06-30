<template>
  <div class="container pt-4 pb-4 add-meme mt-5">
    <div class="row">
      <form
        @submit.prevent="onUpload"
        class="add-form col-10 col-md-8 col-lg-6 m-auto p-3  z-depth-3" 
      >
        <p class="h4 text-center mb-4">Add new meme.</p>
        <div class="grey-text">
          <mdb-input
            type="text"
            label="Meme title"
            counter
            v-model="title"
          />
          <mdb-input
            v-model="description"
            type="textarea"
            label="Meme description"
            :rows="5"
            counter
          />
          <div class="input-group">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
                @change="onSelect"
              />
              <label class="custom-file-label text-left" for="inputGroupFile01"
                >Choose file</label
              >
            </div>
          </div>
          <mdb-container class="mt-3">
            <mdb-progress color="success" :height="20" :value="uploadValue" />
          </mdb-container>
        </div>
        <div class="text-center mt-3">
          <mdb-btn color="elegant" type="submit">Add</mdb-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbBtn, mdbContainer, mdbProgress } from "mdbvue";
import storage from "../firebaseStorage";
export default {
  name: "AddNew",
  components: {
    mdbInput,
    mdbBtn,
    mdbContainer,
    mdbProgress
  },
  data() {
    return {
      file: null,
      title: "",
      description: "",
      user: !this.$store.getters.user ? false : this.$store.getters.user.email,
      nick: !this.$store.getters.user ? false : this.$store.getters.user.nick,
      uploadValue: 0,
    };
  },
  methods: {
    onSelect(e) {
      this.file = e.target.files[0];
    },
    onUpload() {
      let storageRef = storage.ref();
      let timeInMs = Date.now();
      const user = this.user;
      let imagesRef = storageRef.child(
        `memes/${this.title}-${user}-${timeInMs}`
      );
      let file = this.file;

      const newMeme = {
        title: this.title,
        nick: this.nick,
        description: this.description,
      };

      this.title = '';
      this.description = '';

      imagesRef.put(file).then((snapshot) => {
        this.uploadValue =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        const imagePath = snapshot.ref.fullPath;
        newMeme.imagePath = imagePath;

        this.$store.dispatch("setMeme", newMeme);

      });
    },
  },
  created() {
    this.$store.dispatch("getUser");
  },
};
</script>

<style lang="scss" scoped>
.add-meme {
  min-height: 100vh;
}
</style>
