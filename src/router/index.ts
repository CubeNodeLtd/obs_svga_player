import { createRouter , createWebHistory } from 'vue-router'
import svgadock from "../components/ObsSvgaDock.vue"
import aedock from "../components/AudioEffect.vue"
import svgarender from "../components/ObsSvgaRender.vue"
// import audiorender from "../components/ObsAudioRender.vue"

const routes = [
    {
        path : '/',
        component : svgadock,

    },
    {
        path : "/ae/:uuid",
        component: aedock
    },
    {
        path : "/render/:id",
        component: svgarender
    }
]

const router = createRouter({
   history : createWebHistory("#"),
   routes
})

export default router