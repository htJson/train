<template>
  <div class="side_right">
    <!-- 面包屑导航 -->
    <div class="ab_bg_white ab_Title" style="">
      <h4>培训学校信息列表<router-link to="/add_course" class="btn btn-sm btn-primary pull-right"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;添加</router-link></h4>
    </div>
    <div class="container-fluid ab_style" id="table-cont">
      <!-- 动态 -->
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>学校名称</th>
            <th>学校地点</th>
            <th>合作起止时间</th>
            <th>创建时间</th>
            <th>联系人</th>
            <th>联系电话</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><router-link to="/deail">北京市东城区职业大学</router-link></td>
            <td>北京市潘家胡同2号</td>
            <td>2012/09/12-2018/09/12</td>
            <td>李老师</td>
            <td>15201491992</td>
            <td>010-0994842482</td>
            <td>
              <a href="javascript:;" class="">编辑</a>
              <a href="javascript:;" class="">取消</a>
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
<script></script>
<style scoped>

</style>

