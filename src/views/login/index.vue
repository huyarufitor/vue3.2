<template>
    <!-- <el-button>登录</el-button> -->
    <div class="login-container">
        <el-form ref="formRef" :model="form" class="login-form">
            <div class="title-container">
                <h3 class="title">用户登录</h3>
            </div>
            <el-form-item>
                <div class="name">
                    <el-icon :size="20" class="svg-container"><avatar /></el-icon>
                    <el-input v-model="form.name"></el-input>
                </div>
                <div class="password">
                    <el-icon :size="20" class="svg-container"><lock /></el-icon>
                    <el-input v-model="form.password" type="password"></el-input>
                </div>
            </el-form-item>
            <el-button type="primary" class="login-button" @click="handleLogin(form.name, form.password)"
                >用户登录</el-button
            >
        </el-form>
        <div>
            childComponent:
            <LoginPage @handleSize="handleSizeChange" :pageSize="pageSize"> </LoginPage>
        </div>
    </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import LoginPage from '@/components/LoginPage.vue';
import { Avatar, Lock } from '@element-plus/icons-vue';
export default defineComponent({
    components: {
        LoginPage,
    },
    props: {
        //接收调用组件传回的参数
        // title: { type: String, default: '3333' },
    },

    setup(props, context) {
        console.log('props', props);
        const form = ref({
            name: '',
            password: '',
        });

        // myNum = 1';
        const pageSize = ref(100);
        //  vue3 中的方法methods
        const handleLogin = function (name: string, password: string): void {
            const data = { name: name, password: password };
            console.log('请求数据', data);
        };
        // 传递方法给父组件
        const handleSizeChange = (val: number): void => {
            pageSize.value = val;
            context.emit('handleSizeChange', val);
        };
        return {
            handleLogin,
            form,
            Avatar,
            Lock,
            handleSizeChange,
        };
    },
});
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;

        ::v-deep .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }

        ::v-deep .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;

            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                height: 47px;
                caret-color: $cursor;
            }
        }
        .login-button {
            width: 100%;
            box-sizing: border-box;
        }
    }

    .tips {
        font-size: 16px;
        line-height: 28px;
        color: #fff;
        margin-bottom: 10px;

        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
    }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }

        ::v-deep .lang-select {
            position: absolute;
            top: 4px;
            right: 0;
            background-color: white;
            font-size: 22px;
            padding: 4px;
            border-radius: 4px;
            cursor: pointer;
        }
    }

    .show-pwd {
        // position: absolute;
        // right: 10px;
        // top: 7px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
}
</style>
