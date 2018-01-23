<template>
  <div class="side_right">
    <!-- 面包屑导航 -->
    <div class="ab_bg_white ab_Title" style="">
        <h4>课程列表<router-link to="/add_course" class="btn btn-sm btn-primary pull-right"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;添加</router-link></h4>
    </div>
    <div class="container-fluid ab_style" id="table-cont">
      <!-- 动态 -->
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>课程名称</th>
            <th>包含章节数</th>
            <th>课时</th>
            <th>学分</th>
            <th>包含服务项目</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;"  @click="edite">编辑</a>
              <a href="javascript:;" class="">编辑</a>
            </td>
          </tr>
          <tr>
            <td>保洁</td>
            <td>第一节</td>
            <td>日常清洁五要素</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>2014</td>
            <td>
              <a href="javascript:;" @click="edite">编辑</a>
              <a href="javascript:;" class="">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation" style="padding-bottom:10px; text-align:center;">
        <ul class="pagination" style="margin:0 auto;">
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="active"><a href="javascript:;">1 <span class="sr-only">(current)</span></a></li>
          <li><a href="javascript:;">2</a></li>
          <li><a href="javascript:;">3</a></li>
          <li><a href="javascript:;">4</a></li>
          <li><a href="javascript:;">5</a></li>
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">课程表</h4>
          </div>
          <div class="modal-body">
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function scrollHandle (e){
  var scrollTop = this.scrollTop;
  $(this).find('thead').css('backgroundColor','#fff')
  this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
}
export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App111'
      }
    },
    mounted(){

      $('#table-cont').on('scroll',scrollHandle)
    },
    methods:{
        edite(){

            $('#myModal').modal('show')
        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
