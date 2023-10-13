<!--script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script-->

<template>
  <div class="scene" id="scene"></div>
</template>

<script setup>
import Base3d from './utils/Base3d';
import SphereProjection from './utils/SphereProjection';
import VRTeleport from './utils/VRTeleport';
import VRVideo from './utils/VRVideo';
import { reactive,onMounted } from 'vue';
const data = reactive({
    base3d:{},
    sphereprojection:{},
    vrteleport: {},
    vrvideo: {}
})
onMounted(()=>{
    // data.base3d = new Base3d('#scene')
    data.sphereprojection = new SphereProjection('#scene')
    // data.vrteleport = new VRTeleport('#scene')
    data.vrvideo = new VRVideo('#scene')
})
</script>

<style scoped>
* {
    margin:0;
    padding: 0;
}
</style>
