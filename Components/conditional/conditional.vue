<template>
  <p v-if="show">{{Lang}}</p>
  <p v-else>No language</p>
</template>
<script>
export default {
  data() {
    return {
      show: "",
      Lang: "Javascript"
    };
  }
};
</script>

