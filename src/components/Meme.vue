<template>
    <div class="meme">
        {{meme.title}}
    </div>
</template>

<script>
export default {
    name: 'Meme',
    props: ['meme']
}
</script>
