<template>
  <div>
    <iframe
      src="https://api.tmqpay.com/docs.php"
      frameborder="0"
      :style="{ height: '600px', width: '100%'}"
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