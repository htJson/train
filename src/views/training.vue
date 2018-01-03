<template>
  <div class="side_right">
    <div class="ab_bg_white ab_Title" style="">
      <h4>培训列表<router-link to="/addTrain" class="btn btn-sm btn-primary pull-right"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;添加</router-link></h4>
    </div>
    <div class="container-fluid ab_style " id="table-cont">
      <div style="padding:10px 0; background:#fff" class="screen">
        <div class="ab_screen">
          <div class="form-inline">
            <div class="form-group">
              <label>合伙人：</label>
              <select name="" class="form-control">
                <option value="">1111111111111111111111111</option>
                <option value="">1111111111111111111111111</option>
                <option value="">1111111111111111111111111</option>
              </select>
            </div>
            <div class="form-group ab_pl15">
              <label>培训课程：</label>
              <select name="" class="form-control">
                <option value="">1111111111111111111111111</option>
                <option value="">1111111111111111111111111</option>
                <option value="">1111111111111111111111111</option>
              </select>
              <!--<select name="" id="" class="form-control">-->
              <!--<option value="">这是选项而已</option>-->
              <!--</select>-->
            </div>
            <div class="form-group ab_pl15">
              <label>日期：</label>
              <input type="text" class="form-control" placeholder="Text input">
              <label>~</label>
              <input type="text" class="form-control" placeholder="Text input">
            </div>
            <button type="submit" class="btn btn-primary btn-sm ab_ml15">确定</button>
          </div>
        </div>
      </div>

      <!-- 动态 -->
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>合伙人</th>
            <th>培训时间范围</th>
            <th>培训课程</th>
            <th>培训人员数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>保洁11111</td>
          <td>第一节</td>
          <td>日常清洁五要素</td>
          <td>日常保洁</td>
          <td>
            <a href="javascript:;" class="btn-sm btn-sm">编辑</a>
            <a href="javascript:;" class="btn-sm btn-sm">删除</a>
          </td>
        </tr>
        <tr>
          <td>保洁</td>
          <td>第一节</td>
          <td>日常清洁五要素</td>
          <td>日常保洁</td>
          <td>
            <a href="javascript:;" class="btn-sm btn-sm">编辑</a>
            <a href="javascript:;" class="btn-sm btn-sm">删除</a>
          </td>
        </tr>
        <tr>
          <td>保洁</td>
          <td>第一节</td>
          <td>日常清洁五要素</td>
          <td>日常保洁</td>
          <td>
            <a href="javascript:;" class="btn-sm btn-sm">编辑</a>
            <a href="javascript:;" class="btn-sm btn-sm">删除</a>
          </td>
        </tr>
        <tr>
          <td>保洁</td>
          <td>第一节</td>
          <td>日常清洁五要素</td>
          <td>日常保洁</td>
          <td>
            <a href="javascript:;" class="btn-sm btn-sm">编辑</a>
            <a href="javascript:;" class="btn-sm btn-sm">删除</a>
          </td>
        </tr>
        <tr>
          <td>保洁</td>
          <td>第一节</td>
          <td>日常清洁五要素</td>
          <td>日常保洁</td>
          <td>
            <a href="javascript:;" class="btn-sm btn-sm">编辑</a>
            <a href="javascript:;" class="btn-sm btn-sm">删除</a>
          </td>
        </tr>
        <tr>
          <td>保洁</td>
          <td>第一节</td>
          <td>日常清洁五要素</td>
          <td>日常保洁</td>
          <td>
            <a href="javascript:;" class="btn-sm btn-sm">编辑</a>
            <a href="javascript:;" class="btn-sm btn-sm">删除</a>
          </td>
        </tr>
        <tr>
          <td>保洁</td>
          <td>第一节</td>
          <td>日常清洁五要素</td>
          <td>日常保洁</td>
          <td>
            <a href="javascript:;" class="btn-sm btn-sm">编辑</a>
            <a href="javascript:;" class="btn-sm btn-sm">删除</a>
          </td>
        </tr>
        <tr>
          <td>保洁</td>
          <td>第一节</td>
          <td>日常清洁五要素</td>
          <td>日常保洁</td>
          <td>
            <a href="javascript:;" class="btn-sm btn-sm">编辑</a>
            <a href="javascript:;" class="btn-sm btn-sm">删除</a>
          </td>
        </tr>
        <tr>
          <td>保洁</td>
          <td>第一节</td>
          <td>日常清洁五要素</td>
          <td>日常保洁</td>
          <td>
            <a href="javascript:;" class="btn-sm btn-sm">编辑</a>
            <a href="javascript:;" class="btn-sm btn-sm">删除</a>
          </td>
        </tr>
        <tr>
          <td>保洁</td>
          <td>第一节</td>
          <td>日常清洁五要素</td>
          <td>日常保洁</td>
          <td>
            <a href="javascript:;" class="btn-sm btn-sm">编辑</a>
            <a href="javascript:;" class="btn-sm btn-sm">删除</a>
          </td>
        </tr>
        <tr>
          <td>保洁</td>
          <td>第一节</td>
          <td>日常清洁五要素</td>
          <td>日常保洁</td>
          <td>
            <a href="javascript:;" class="btn-sm btn-sm">编辑</a>
            <a href="javascript:;" class="btn-sm btn-sm">删除</a>
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
    $(this).find('.screen').css('backgroundColor','#fff')
      this.querySelector('thead').style.transform = 'translateY(' + scrollTop + 'px)';
      if(this.querySelector('.screen')){
          this.querySelector('.screen').style.transform = 'translateY(' + scrollTop + 'px)';
      }
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
