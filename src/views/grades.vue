<template>
    <div class="side_right">
        <!-- 面包屑导航 -->
        <div class="ab_bg_white ab_Title" style="">
            <h4>成绩管理</h4>
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
                            <label>课程名称：</label>
                            <select name="" class="form-control">
                                <option value="">1111111111111111111111111</option>
                                <option value="">1111111111111111111111111</option>
                                <option value="">1111111111111111111111111</option>
                            </select>
                        </div>
                        <div class="form-group ab_pl15">
                            <input type="text" class="form-control" placeholder="搜索条件">
                            <button type="submit" class="btn btn-primary btn-sm ab_ml15">搜索</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 动态 -->
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>身份证号</th>
                        <th>联系方式</th>
                        <th>年龄</th>
                        <th>课程名称</th>
                        <th>培训日期</th>
                        <th>隶属合伙人</th>
                        <th>考试成绩</th>
                        <th>是否合格</th>
                        <th>评级</th>
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
    /*/usr/local/Cellar/mongodb/3.6.1: 19 files, 288.5MB*/
</style>
