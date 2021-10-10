<template>
    <div class="login">
        <p>管理系统</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="密 码" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="login('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name:"login",
    data(){
        return{
          ruleForm: {
            name: '',
            password: ''
          },
          rules: {
            name: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
          }
        }
    }
}
</script>