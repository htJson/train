<template>
  <div class="side_right">
    <!-- 面包屑导航 -->
    <div class="ab_bg_white ab_Title" style="">
      <h4>教师信息列表<router-link to="/addTeacher" class="btn btn-sm btn-primary pull-right"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;添加</router-link></h4>
    </div>
    <div class="container-fluid ab_style" id="table-cont">
      <!-- 动态 -->
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>姓名</th>
            <th>联系方式</th>
            <th>培训地址</th>
            <th>性别</th>
            <th>年龄</th>
            <th>创建时间</th>
            <th>状态</th>
            <th>培训课程</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>保洁</td>
            <td>1429009999</td>
            <td>北京</td>
            <td>日常保洁</td>
            <td>康洁士</td>
            <td>康洁士</td>
            <td>康洁士</td>
            <td>康洁士</td>
            <td>
              <button class="btn btn-primary">编辑</button>
              <button class="btn btn-default">编辑</button>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
