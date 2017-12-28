<template>
	<div class="side_left ab_left_bg">
      <div class="col-lg-12 col-md-12 ab_pt20 ab_pb20 ab_left_right_bordr">
        <div class="container-fluid" id="navLeft">
        <div class="list-group">
          <h5 class="ab_f13 ab_cursor ab_navTitle">
              <span class="glyphicon glyphicon glyphicon-play" aria-hidden="true"></span>课程信息
          </h5>
          <ul class="list-group ab_list ab_margin list-menu">
            <li class="list-group-item">
              <router-link to="/">课程列表</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/add_course">添加课程</router-link>
            </li>
          </ul>
        </div>
        <div class="list-group">
          <h5 class="ab_f13 ab_cursor ab_navTitle">
          	<span class="glyphicon glyphicon glyphicon-play" aria-hidden="true"></span>培训学校信息管理
          </h5>
          <ul class="list-group ab_list ab_margin list-menu">
            <li class="list-group-item">
              <router-link to="/newsList">信息管理列表</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/addNews">添加信息管理</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/deail">信息管理详情</router-link>
            </li>
          </ul>
        </div>
        <div class="list-group">
          <h5 class="ab_f13 ab_cursor ab_navTitle"><span class="glyphicon glyphicon glyphicon-play" aria-hidden="true"></span>教室信息管理</h5>
          <ul class="list-group ab_list ab_margin list-menu">
            <li class="list-group-item">
              <router-link to="room" >教室信息列表</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="addRoom">添加课程</router-link>
            </li>
          </ul>
        </div>
          <div class="list-group">
            <h5 class="ab_f13 ab_cursor ab_navTitle"><span class="glyphicon glyphicon glyphicon-play" aria-hidden="true"></span>教师信息管理</h5>
            <ul class="list-group ab_list ab_margin list-menu">
              <li class="list-group-item">
                <router-link to="/teacher">教师信息</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/addTeacher">添加教师</router-link>
              </li>
            </ul>
          </div>
          <div class="list-group">
            <h5 class="ab_f13 ab_cursor ab_navTitle"><span class="glyphicon glyphicon glyphicon-play" aria-hidden="true"></span>培训管理</h5>
            <ul class="list-group ab_list ab_margin list-menu">
              <li class="list-group-item">
                <router-link to="/training">培训需求</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/addTrain">添加培训需求</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/planTrain">培训计划</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/trainVideo">培训视频</router-link>
              </li>
              <li class="list-group-item">
                <router-link to="/addTrainVideo">添加培训视频</router-link>
              </li>
            </ul>
          </div>
          <div class="list-group">
            <h5 class="ab_f13 ab_cursor ab_navTitle"><span class="glyphicon glyphicon glyphicon-play" aria-hidden="true"></span>考试管理</h5>
            <ul class="list-group ab_list ab_margin list-menu">
              <li class="list-group-item">
                <router-link to="/grades">成绩管理</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		mounted(){
			$('.list-group').on('click','h5',function(){
		        if($(this).hasClass('ab_navTitle')){
		          $(this).removeClass('ab_navTitle');
		          $(this).next('.list-menu').hide()
		        }else{
		          $(this).addClass('ab_navTitle')
		          $(this).next('.list-menu').show()
		        }
      })

		}
	}
</script>
<style scoped>
	#nav_left{width:220px; position:absolute; left:0px; top:53px; background:#f1f1f1; bottom:0px;}
</style>
