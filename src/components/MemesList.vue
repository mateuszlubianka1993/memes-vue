<template>
    <div class="container">
        <Meme v-for="(meme, index) in memes" :key="index" :meme="meme" />
    </div>
</template>

<script>
import Meme from '@/components/Meme.vue';

export default {
    name: 'MemesList',
    props: ['memes'],
    components: {
        Meme
    }
}
</script>
