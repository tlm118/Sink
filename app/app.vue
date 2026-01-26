<script>
export default {
  name: 'Home',
  mounted() {
    if (window.location.pathname === '/') {
      // 外部域名跳转
      window.location.replace('http://doc.7ge.top/');
      // 内部路由跳转用 this.$router.replace('/new-home')
    }
  }
}
</script>
