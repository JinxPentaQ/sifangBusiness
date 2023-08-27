<template>
  <div>
    <iframe
      :src="url"
      frameborder="0"
      :style="{ height: ifHeight, width: '100%', 'margin-left': '10px' }"
    ></iframe>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      url: "",
    };
  },
  computed: {
    ifHeight() {
      return document.body.clientHeight + "px";
    },
  },
  methods: {},
  mounted() {
    this.url = sessionStorage.getItem("docs");
  },
};
</script>

<style scoped lang='scss'>
</style>