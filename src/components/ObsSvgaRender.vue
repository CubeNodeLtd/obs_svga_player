<template>
<div>
    <div id="Canvas" :style=rendersize></div>

</div>
</template>
<script lang="ts">
import {ref, toRefs, onMounted, reactive ,defineComponent } from 'vue'
import svgaplayer from "svgaplayerweb"
import {useWebsocket} from '../hooks';
import {useRoute} from 'vue-router'

export default defineComponent({
    name :"ObsSvgaRender",
    props: {
    },
    setup() {
        const state = reactive({
            rendersize : {
                "display": "flex",
                "justify-content": "flex-start"
            },
        })
        
        const route = useRoute()
    



        onMounted(()=>{
            let player = new svgaplayer.Player("#Canvas")
            var parser = new svgaplayer.Parser()
            const id = Number(route.params.id)
             parser.load(`https://obs-public-recourse.oss-cn-beijing.aliyuncs.com/${id}.svga`, function(videoItem) {
                player.setVideoItem(videoItem);
                player.loops = 1;
                player.startAnimation();
            })
        })


        return {
            ...toRefs(state)
        }

    }
})
</script>

<style scoped>

</style>
