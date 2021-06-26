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

import svga1 from '../assets/SVGA/1.svga?url'
import svga2 from '../assets/SVGA/2.svga?url'
import svga3 from '../assets/SVGA/3.svga?url'
import svga4 from '../assets/SVGA/4.svga?url'
import svga5 from '../assets/SVGA/5.svga?url'
import svga6 from '../assets/SVGA/6.svga?url'
import svga7 from '../assets/SVGA/7.svga?url'
import svga8 from '../assets/SVGA/8.svga?url'

export default defineComponent({
    name :"ObsSvgaRender",
    props: {
    },
    setup() {
        const state = reactive({
            rendersize : {
                "display": "flex",
                "justify-content": "center"
            },
        })
        
        const route = useRoute()
    

        const svgaSourceLists = [svga1,svga2,svga3,svga4,svga5,svga6,svga7,svga8]


        onMounted(()=>{
            let player = new svgaplayer.Player("#Canvas")
            var parser = new svgaplayer.Parser()
            const id = Number(route.params.id)
             parser.load(svgaSourceLists[id-1], function(videoItem) {
                console.log(videoItem)
                // state.rendersize.width = videoItem.videoSize.width + "px"
                // state.rendersize.height = videoItem.videoSize.height + "px"
                console.log(state.rendersize)
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
