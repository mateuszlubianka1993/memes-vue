<template>
  <div class="meme row mb-4">
    <div class="col-12 col-md-8 meme-box pt-3 pb-1 m-auto z-depth-2">
      <h3>{{ meme.title }}</h3>
      <div class="img-box border border-dark">
        <img :src="imageSrc" class="meme-img" />
      </div>
      <blockquote class="blockquote text-center">
        <p class="mb-0">
          {{meme.description}}
        </p>
        <footer class="blockquote-footer mb-3">      
            Author <cite title="Source Title">{{meme.nick}}</cite>
        </footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
import storage from "../firebaseStorage";

export default {
  name: "Meme",
  props: ["meme"],
  data() {
    return {
      imageSrc: null,
    };
  },
  methods: {
    getImage() {
      var pathReference = storage.ref(this.meme.imagePath);

      pathReference
        .getDownloadURL()
        .then((url) => {
          this.imageSrc = url;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getImage();
  },
};
</script>

<style lang="scss" scoped>
.meme {
  .meme-box {
    border: 2px solid #444;

    img.meme-img {
      max-width: 100%;
    }
  }
}
</style>
