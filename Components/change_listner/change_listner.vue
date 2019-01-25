<template>
  <div>
    <input type="text" v-model="item" name="item">
    <p>{{item}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: ""
    };
  }
};
</script>

