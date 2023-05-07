<template>
  <div></div>
</template>
<script>
export default {
  created() {
    // eslint-disable-next-line no-unused-expressions, no-sequences
    document.body.style.backgroundImage = 'url("https://ts1.cn.mm.bing.net/th/id/R-C.d4a32f0659094cb777e77960cddf0c24?rik=HnrzDSC%2b%2fH5dTQ&riu=http%3a%2f%2fwww.itshubao.com%2fuploads%2fimages%2f20171223%2fae5f384d5b0edef315c5e8a61aabd354.jpg&ehk=abQIqJEwiKioaSNYXmAclGb5uETnSYovNfsr%2bpwB3qQ%3d&risl=&pid=ImgRaw&r=0")',
    document.body.style.backgroundSize = '100% 100%',
    document.body.style.height = '100vh';
  },
  destroyed() {
    // eslint-disable-next-line no-unused-expressions, no-sequences
    document.body.style.backgroundImage = '',
    document.body.style.backgroundSize = '',
    document.body.style.height = '';
  },
};
</script>
<style>

</style>
