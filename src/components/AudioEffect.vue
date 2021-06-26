<template>
    <h1>ae</h1>
</template>
<script lang="ts">
import {ref, defineComponent } from 'vue'

export default defineComponent({
    name :"AudioEffect",
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
