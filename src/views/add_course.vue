<template>
  <div class="side_right">
    <!-- 面包屑导航 -->
    <div class="ab_bg_white ab_Title" >
        <div class="row">
            <ol class="breadcrumb ab_navRouter">
                <li><a href="/">课程列表</a></li>
                <li>添加</li>
            </ol>
        </div>
    </div>
    <div class="container-fluid ab_style">
      <div style="width:1000px; margin:0 auto; overflow: hidden;">
        <form class="form-horizontal ab_mt20 col-sm-9" >
          <div class="form-group">
            <label class="col-sm-2 control-label">课程名称</label>
            <div class="col-sm-10">
              <input type="email" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">包含服务项</label>
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
              <div class="ab_item">
                  <!--<a href="javascript:;" class="del">-->
                      <!--<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>-->
                  <!--</a>-->
                  <div class="form-group">
                      <label class="col-sm-2 control-label">课程章节</label>
                      <div class="col-sm-10">
                          <input type="text" class="form-control" placeholder="请输入课程标题">
                      </div>
                  </div>
                  <div class="form-group">
                      <label class="col-sm-2 control-label">授课内容</label>
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
                  <div class="form-group">
                      <div class="col-sm-offset-2 col-sm-10 container-fluid">
                          <table class="table table-bordered">
                              <thead>
                                <tr>
                                    <th>课程名称</th>
                                    <th>课程章节</th>
                                    <th>标题</th>
                                    <th>授课内容</th>
                                    <th>操作</th>
                                </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td>课程名称</td>
                                  <td>课程章节</td>
                                  <td>标题</td>
                                  <td>授课内容</td>
                                  <td>
                                      <a href="javascript:;">删除</a>
                                      <a href="javascript:;">编辑</a>
                                  </td>
                              </tr>
                              <tr>
                                  <td>课程名称</td>
                                  <td>课程章节</td>
                                  <td>标题</td>
                                  <td>授课内容</td>
                                  <td>
                                      <a href="javascript:;">删除</a>
                                      <a href="javascript:;">编辑</a>
                                  </td>
                              </tr>
                              </tbody>
                          </table>
                      </div>

                  </div>
                  <div class="form-group">
                      <div class="form-inline text-center">
                          <button class="btn btn-primary">确定</button>
                          <button class="btn btn-default">取消</button>
                      </div>
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
