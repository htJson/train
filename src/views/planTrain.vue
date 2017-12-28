<template>
    <div class="side_right">
        <!-- 面包屑导航 -->
        <div class="ab_bg_white" style="margin-bottom:10px;border-bottom:1px solid #ddd; margin:0; padding-left:28px;  position:absolute; z-index: 10; left:11px; right:0px; top:0px;
          box-shadow: 1px 1px 1px 0px #f1f1f1;
          background:#fff">
            <h3 style=" padding-bottom:6px; margin-top:25px; font-weight: normal;">栏目标题</h3>
        </div>

        <div class="container-fluid ab_style " id="table-cont">
            <div style="padding:10px 0; background:#fff" class="screen">
                <div class="ab_screen">
                    <div class="form-inline">
                        <div class="form-group">
                            <label>日期:</label>
                            <input type="text" class="form-control" placeholder="Text input">
                            <label>~</label>
                            <input type="text" class="form-control" placeholder="Text input">
                        </div>
                        <div class="form-group ab_pl15">
                            <label>学校:</label>
                            <select name="" class="form-control">
                                <option value="">1111111111111111111111111</option>
                                <option value="">1111111111111111111111111</option>
                                <option value="">1111111111111111111111111</option>
                            </select>
                        </div>
                        <div class="form-group ab_pl15">
                            <label>教师:</label>
                            <select name="" class="form-control">
                                <option value="">1111111111111111111111111</option>
                                <option value="">1111111111111111111111111</option>
                                <option value="">1111111111111111111111111</option>
                            </select>
                        </div>
                        <div class="form-group ab_pl15">
                            <label>合伙人:</label>
                            <select name="" class="form-control">
                                <option value="">1111111111111111111111111</option>
                                <option value="">1111111111111111111111111</option>
                                <option value="">1111111111111111111111111</option>
                            </select>
                        </div>

                        <div class="form-group ab_pl15">
                            <label>教室:</label>
                            <select name="" class="form-control">
                                <option value="">1111111111111111111111111</option>
                                <option value="">1111111111111111111111111</option>
                                <option value="">1111111111111111111111111</option>
                            </select>
                        </div>

                        <button type="submit" class="btn btn-primary btn-sm ab_ml15">添加</button>
                    </div>
                </div>
            </div>

            <!-- 动态 -->
            <table class="table table-striped table-hover">
                <thead>
                <tr>
                    <th>教师</th>
                    <th>课程</th>
                    <th>学校</th>
                    <th>教室</th>
                    <th>时间</th>
                    <th>合伙人</th>
                    <th>培训/考核</th>
                    <th>培训人数</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>保洁11111</td>
                        <td>第一节</td>
                        <td>日常清洁五要素</td>
                        <td>日常保洁</td>
                        <td>日常保洁</td>
                        <td>日常保洁</td>
                        <td>日常保洁</td>
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
