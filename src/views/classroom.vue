<template>
  <div class="side_right">
    <!-- 面包屑导航 -->
    <div class="ab_bg_white ab_Title" style="">
      <h4>教室信息列表<a href="/addRoom" class="btn btn-sm btn-primary pull-right"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;添加</a></h4>
    </div>
    <div class="container-fluid ab_style" id="table-cont">
      <!-- 动态 -->
      <table class="table table-striped table-hover">
        <thead>
        <tr>
          <th>隶属学校</th>
          <th>教学楼号</th>
          <th>支持课程</th>
          <th>可容纳人数</th>
          <th>是否可用</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>北京大学</td>
          <td>智学苑01</td>
          <td>保洁</td>
          <td>40人</td>
          <td>是</td>
          <td>2018/09/12 10:10:10</td>
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
