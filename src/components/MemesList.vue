<template>
    <div class="container">
        <Meme v-animateOnScroll="{animation: 'bounceInLeft'}" v-for="(meme, index) in memes" :key="index" :meme="meme" />
    </div>
</template>

<script>
import Meme from '@/components/Meme.vue';
import { animateOnScroll } from "mdbvue";

export default {
    name: 'MemesList',
    props: ['memes'],
    components: {
        Meme
    },
    directives: {
      animateOnScroll
    }
}
</script>
