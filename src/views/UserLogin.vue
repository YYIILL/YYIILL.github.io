<template>
  <div class="page-container">
    <el-card class="el-card">
          <template #header>黑马面经后台</template>
          <el-form ref="form" :rules="rules" label-position="top" label-width="80px" :model="user">
          <el-form-item label="用户名" prop="username">
            <el-input v-model.trim="user.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item class="form-operation" size="large">
            <el-button type="primary" @click="submit">登录</el-button>
            <el-button @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
        </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },

  methods: {
    async submit() {
      await this.$refs.form.validate();
      console.log('校验通过');
      this.$store.dispatch('user/login', this.user);
      this.$router.push('/');
    },
    reset() {
      this.$refs.form.resetFields();
    },
  },
};
</script>
<!-- <style lang="scss" scoped src="../style/login.css"></style> -->

<style lang="scss" scoped>
.page-container{
  display: flex;
  align-items: center;
  background-image: url('https://ts1.cn.mm.bing.net/th/id/R-C.c96d13777ddaa6387f351c7143e1a67c?rik=mWqJ1kgUCrn3mQ&riu=http%3a%2f%2fwww.kutoo8.com%2fupload%2fimage%2f07984481%2f5c42beaa46948.jpg&ehk=LNdNSP9lV8uaMghcZLXNy1FQWHvKTd1ETQuhjgu1q20%3d&risl=&pid=ImgRaw&r=0');
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.el-card {
    width: 420px;
    margin: 0 auto;
    border: 0;
}
::v-deep .el-card__header {
  background-color: #727cf5;
  text-align: center;
  color: #fff;
}

.form-operation{
  text-align: center;
  margin-bottom: 0;
}
</style>
