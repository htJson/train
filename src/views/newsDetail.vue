<template>
  <div class="side_right">
    <!-- 面包屑导航 -->
    <div class="ab_bg_white ab_Title" >
      <div class="row">
        <ol class="breadcrumb ab_navRouter">
          <li><router-link to="/newsList">培训信息列表</router-link></li>
          <li>信息管理详情</li>
        </ol>
      </div>
    </div>
    <div class="container-fluid ab_style">
      <div style="width:1000px; margin:0 auto;">
        <dl class="dl-horizontal ab_detail">
          <dt>学校名称:</dt>
          <dd>学校名称</dd>

          <dt>学校地点:</dt>
          <dd>学校名称</dd>

          <dt>学校简介:</dt>
          <dd>学校名称</dd>

          <dt>合作起止日期:</dt>
          <dd>学校名称</dd>

          <dt>联系人:</dt>
          <dd>学校名称</dd>

          <dt>联系电话:</dt>
          <dd>学校名称</dd>

        </dl>
        <!--<form class="form-horizontal ab_mt20 col-sm-9" >-->
          <!--<div class="form-group">-->
            <!--<label for="inputEmail3" class="col-sm-2 control-label">学校名称</label>-->
            <!--<div class="col-sm-10">-->
              <!--学校名称-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group">-->
            <!--<label for="" class="col-sm-2 control-label">学校地点</label>-->
            <!--<div class="col-sm-10">-->
              <!--学校地点-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group">-->
            <!--<label for="" class="col-sm-2 control-label">学校简介</label>-->
            <!--<div class="col-sm-10">-->
              <!--学校简介-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group nav-justified">-->
            <!--<label for="" class="col-sm-2 control-label">合作起止日期</label>-->
            <!--<div class="col-sm-10 form-inline">-->
              <!--2019/09/12-2018/09/13-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group">-->
            <!--<label class="col-sm-2 control-label">联系人</label>-->
            <!--<div class="col-sm-10">-->
              <!--蒋二欢-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="form-group">-->
            <!--<label class="col-sm-2 control-label">联系电话</label>-->
            <!--<div class="col-sm-10">-->
              <!--15201491992-->
            <!--</div>-->
          <!--</div>-->
        <!--</form>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App111'
      }
    },
    mounted(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
