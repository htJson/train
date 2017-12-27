<template>
  <div class="side_right">
    <!-- 面包屑导航 -->
    <div class="ab_bg_white" style="margin-bottom:10px;border-bottom:1px solid #ddd; margin:0; padding-left:28px;  position:absolute; z-index: 10; left:11px; right:0px; top:0px;
          box-shadow: 1px 1px 1px 0px #f1f1f1;
          background:#fff">
      <h3 style=" padding-bottom:6px; margin-top:25px; font-weight: normal;">添加课程</h3>
    </div>
    <div class="container-fluid ab_style">
      <div style="width:1000px; margin:0 auto;">
        <form class="form-horizontal ab_mt20 col-sm-9" >
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">隶属学校</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">教学楼号</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">支持课程</label>
              <div class="col-sm-10 form-inline">
                <select class="form-control">
                  <option>保洁</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <button class="btn btn-primary"><span class="glyphicon glyphicon glyphicon-plus ab_font12" aria-hidden="true"></span></button>
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">可容纳人数</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label">是否可用</label>
              <div class="col-sm-10">
                <label class="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox1" value="option1"> 1
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" id="inlineCheckbox2" value="option2"> 2
                </label>
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
