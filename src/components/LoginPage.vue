<template>
    <div class="hello-world">
        <el-button type="primary" @click="handleSize">开始推流</el-button>
        <h2>推流数：{{ count }}</h2>
        <el-button type="error" @click="clearStream()">停止推流</el-button>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue';
export default defineComponent({
    components: {},
    props: {
        pageSize: Number,
    },

    setup(props, context) {
        console.log('props', props, context);
        const count = ref(0);
        const object = reactive({ foo: 'bar' });
        const handleSize = () => {
            count.value++;
            setInterval(() => {
                count.value++;
            }, 1000);
        };
        const clearStream = () => {
            // count.value = 0;
            clearInterval();
        };

        return {
            count,
            object,
            handleSize,
            clearStream,
        };
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
