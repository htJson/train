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
            <label class="col-sm-2 control-label">课程名称</label>
            <div class="col-sm-10">
              <input type="email" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label for="" class="col-sm-2 control-label">包含服务项</label>
            <div class="col-sm-10 form-inline">
              <select name="" class="form-control">
                <option>新课程</option>
              </select>
              <select name="" class="form-control">
                <option>新课程</option>
              </select>
              <button class="btn btn-primary"><span class="glyphicon glyphicon glyphicon-plus ab_font12"  aria-hidden="true"></span></button>
              <button class="btn btn-default"><span class="glyphicon glyphicon glyphicon-minus ab_font12" aria-hidden="true"></span></button>
            </div>
          </div>

          <div style="margin-top:40px;">
            <div class="form-group">
              <label for="" class="col-sm-2 control-label">第几节课</label>
              <div class="col-sm-10">
                <select name="" class="form-control" id="">
                  <option value="">第一节课</option>
                  <option value="">第二节课</option>
                  <option value="">第三节课</option>
                  <option value="">第一节课</option>
                  <option value="">第一节课</option>
                  <option value="">第一节课</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-2 control-label">课程标题</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" placeholder="请输入课程标题">
              </div>
            </div>
            <div class="form-group">
              <label for="" class="col-sm-2 control-label">授课内容</label>
              <div class="col-sm-10">
                <textarea type="text" class="form-control" placeholder="请输入课程标题"></textarea>
              </div>
            </div>

            <div class="form-group">
              <div class="row col-sm-10 col-sm-offset-2">
                <a class="btn btn-default nav-justified" style="border:none;color:#337ab7">
                  <span class="glyphicon glyphicon glyphicon-plus ab_font12" aria-hidden="true"></span>添加课程
                </a>
              </div>
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
        msg: 'Welcome to Your Vue.js11',
        curriculum: {
          name: '课程名称',
          items: [],
          content: [
            {
              num: '1',
              title: '222',
              note: '1111'
            }
          ]
        }
      }
    },
    mounted(){
      $.ajax()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
