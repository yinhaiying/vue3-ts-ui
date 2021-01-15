<template>
  <div class="demo-wrapper">
    <h1 class="demo-title">Switch开关</h1>
    <demo :component = "Switch1Demo1"></demo>  
    <demo :component = "Switch1Demo2"></demo>  
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "@/examples/demo.vue";
import Switch1Demo from "@/examples/switch/Switch1Demo.vue";
import Switch2Demo from "@/examples/switch/Switch2Demo.vue";


export default defineComponent({
  name: "SwitchDemo",
  components: {
    Demo,
  },
  setup() {
    return {
      Switch1Demo1:Switch1Demo,
      Switch1Demo2:Switch2Demo
    };
  },
});
</script>

<style lang="scss"></style>
