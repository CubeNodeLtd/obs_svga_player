<template>
    <h1>hello</h1>
</template>
<script lang="ts">
import {ref, defineComponent } from 'vue'

export default defineComponent({
    name :"ObsSvgaDock",
    props: {
        btnlist: {
            type : Array,
            value : [1,2,3,4,5,6,7,8]
        }
    },
    setup() {
        
    },
})
</script>

<style scoped>

</style>
