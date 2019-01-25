<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{item.name}}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      item: []
    };
  }
};
</script>

