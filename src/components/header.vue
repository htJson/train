<template>
	<nav class="navbar navbar-default ab_header ab_margin">
        <div class="container-fluid" >
          <div class="navbar-header">
            <a class=" ab_padding ab_line_height ab_display ab_pl15" href="#" style="font-size:19px">AOBEI KEJI</a>
          </div>
          <ul class="nav navbar-nav navbar-right ">
            <li>
              <a href="#" class="ab_line_30">
                <i class="icon iconfont ab_font20 ab_left ab_mr5 icon-yonghu1"></i>用户名
              </a>
            </li>
            <li>
              <a href="" class="ab_line_30 ab_mr20">退出</a>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
    </nav>
</template>
<script>
export default{
	data(){
		return {
			
		}
	},
	mounted:function(){
		$('#box').click(function(){
			alert('box')
		})
	},
	methods:{
		add(){
			alert(22)
		},
	}
}
</script>
<style>
	
</style>