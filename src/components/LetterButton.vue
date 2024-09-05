<template>
  <button>{{ letter }}</button>
</template>

<script>
export default {
  props: {
    letter: String,
  },
};
</script>

<style scoped>
/* Add styles for letter buttons */
button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
}
</style>
