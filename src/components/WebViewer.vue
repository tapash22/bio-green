<template>
    <div id="webviewer" ref="viewer"></div>
</template>

<script>
import { ref,onMounted } from 'vue';
import WebViewer from '@pdftron/webviewer';

export default {
    props:{initialDoc:{type: String}},
    setup(props){
        const viewer = ref(null);
        onMounted(()=>{
            const path= `${process.env.BASE_URL}webviewer`;
            WebViewer({path, initialDoc:props.initialDoc}, viewer.value);
        })
        return {viewer}
    }
}
</script>

<style scoped>
#webviewer{
    width: 600px;
    height: 600px;
}
</style>