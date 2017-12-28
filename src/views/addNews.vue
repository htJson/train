<template>
  <div class="side_right">
    <!-- 面包屑导航 -->
    <div class="ab_bg_white" style="margin-bottom:10px;border-bottom:1px solid #ddd; margin:0; padding-left:28px;  position:absolute; z-index: 10; left:11px; right:0px; top:0px;
          box-shadow: 1px 1px 1px 0px #f1f1f1;
          background:#fff">
      <h3 style=" padding-bottom:6px; margin-top:25px; font-weight: normal;">添加服务项目</h3>
    </div>
    <div class="container-fluid ab_style">
      <div style="width:1000px; margin:0 auto;">
        <form class="form-horizontal ab_mt20 col-sm-9" >
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">学校名称</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">学校地点</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" placeholder="学校地点">
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">学校简介</label>
            <div class="col-sm-10">
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <div class="form-group nav-justified">
            <label for="" class="col-sm-2 control-label">合作起止日期</label>
            <div class="col-sm-10 form-inline">
              <input type="text" class="form-control" placeholder="">
              <label for="">至</label>
              <input type="email" class="form-control" placeholder="">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">联系人</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" placeholder="联系人">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">联系电话</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" placeholder="联系电话">
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10 text-center">
              <button type="submit" class="btn btn-primary">确定</button>
              <button type="submit" class="btn btn-default">取消</button>
            </div>
          </div>
        </form>
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
