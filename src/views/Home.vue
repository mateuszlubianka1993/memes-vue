<template>
  <div class="home">
    <HelloWorld msg="Memes Vue App"/>
    <MemesList :memes="memes" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import MemesList from '@/components/MemesList.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MemesList
  },
  data() {
    return {
      memes: [
        {
          title: 'Meme1',
          description: 'Meme1 desc'
        },
        {
          title: 'Meme2',
          description: 'Meme2 desc'
        },
        {
          title: 'Meme3',
          description: 'Meme3 desc'
        }
      ]
    }
  }
}
</script>
