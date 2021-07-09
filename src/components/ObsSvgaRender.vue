<template>
<div>
    <div id="Canvas" class="render"></div>

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

.render{
    width:100vw ;
            height: 100vh;
}
</style>
