<template>
  <div class="title">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello Vue',
      list: [
        {
          name: 'aa',
        },
      ],
    }
  },
}
</script>

<style scoped>
.title {
  color: red;
}
</style>
