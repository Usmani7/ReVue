<template>
  <button @click="onItemClick">Submit</button>
</template>
<script>
export default {
  methods: {
    onItemClick() {
      console.log("Button Clicked");
    }
  }
};
</script>

