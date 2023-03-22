<template>
    <div class="home">
        <HelloWorld msg="响应性API" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
    components: {
        HelloWorld,
    },
})
export default class Home extends Vue {
    name = 'dada';
}
</script>

<style scoped>
.home {
    margin: auto;
}
</style>
