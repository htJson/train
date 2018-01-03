<template>
  <div class="side_right">
    <div class="ab_bg_white ab_Title" >
      <div class="row">
        <ol class="breadcrumb ab_navRouter">
          <li><router-link to="/teacher">教师信息列表</router-link></li>
          <li>添加</li>
        </ol>
      </div>
    </div>

    <div class="container-fluid ab_style">
      <div style="width:1000px; margin:0 auto;">
        <form class="form-horizontal ab_mt20 col-sm-9" >
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">姓名</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputEmail3" placeholder="Email">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">联系方式</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">所在地</label>
            <div class="col-sm-10 form-inline">
              <select name="" class="form-control">
                <option value="">北京</option>
              </select>
              <select name="" class="form-control">
                <option value="">北京</option>
              </select>
              <select name="" class="form-control">
                <option value="">北京</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">性别</label>
            <div class="col-sm-10 form-inline">
              <select name="" class="form-control">
                <option value="">男</option>
                <option value="">女</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">年龄</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputPassword3" placeholder="Password">
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">状态</label>
            <div class="col-sm-10 form-inline">
              <select name="" class="form-control">
                <option value="">在职</option>
                <option value="">离职</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">培训课程</label>
            <div class="col-sm-10 form-inline">
              <select name="" class="form-control">
                <option value="">在职</option>
                <option value="">离职</option>
              </select>
              <button class="btn btn-primary">
                <span class="glyphicon glyphicon glyphicon-plus ab_font12" aria-hidden="true"></span>
              </button>
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
