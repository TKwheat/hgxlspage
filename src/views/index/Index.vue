<template>
  <div>
      <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container text-center py-5">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <i class="fa fa-key display-1 text-primary"></i>
                    <h3 class="mb-4">复制链接，点击下方按钮进行授权（授权链接将于5分钟后过期）</h3>
                     <el-input
                    type="textarea"
                    v-model="permissionurl"
                    show-word-limit
                    style="margin-bottom:15px;"
                    >
                    </el-input>
                    <a style="margin-right:20px;" class="btn btn-primary rounded-pill py-3 px-5 tag-read" :data-clipboard-text="permissionurl" @click="copy">复制链接</a>
                    
                    <a class="btn btn-primary rounded-pill py-3 px-5" href="http://43.138.21.133/#/shop/permission" target="view_window">前往授权</a>

                    <p style="margin-top:15px;" class="mb-4">感谢您的信任，在授权过程中如遇到困难，请及时联系我们的客服人员。</p>
                    
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import API from '@/utils/api';
export default {
    data(){
        return {
            
        }
    },
    computed: {
      // 成功标签
        permissionurl: () => {
            return window.location.href;
        }
    },
    mounted(){
        this.init()
        console.log(111)
        this.getdata();
    },
    methods:{
        async getdata(){
            const res = await this.$axios.Post(API.getdata);
            if (res.rtCode == "0000") {
              this.menuList = res.appResp;
            } else {
              this.$message.warning(res.rtMsg)
            }  
        },
        init(){
            // this.permissionurl = permission
        },
        copy () {
           var clipboard = new Clipboard('.tag-read')
           clipboard.on('success', e => {
              this.$message.success({
              message: "复制成功，请点击下方按钮进行授权",
              type: 'success',
              offset:"100"

           });
              //  释放内存
             clipboard.destroy()
           })
            clipboard.on('error', e =>{
             // 不支持复制
             console.log('该浏览器不支持复制')
             // 释放内存
             clipboard.destroy()
           })
        }
    }
}
</script>

<style>

</style>