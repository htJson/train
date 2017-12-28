<template>
    <div class="side_right">
        <!-- 面包屑导航 -->
        <div class="ab_bg_white" style="margin-bottom:10px;border-bottom:1px solid #ddd; margin:0; padding-left:28px;  position:absolute; z-index: 10; left:11px; right:0px; top:0px;
          box-shadow: 1px 1px 1px 0px #f1f1f1;
          background:#fff">
            <h3 style=" padding-bottom:6px; margin-top:25px; font-weight: normal;">添加服务项目</h3>
        </div>
        <div class="container-fluid ab_style">
            <div style="width:1000px; margin:0 auto;">
                <form class="form-horizontal ab_mt20 col-sm-9" >
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">视频文件:</label>
                        <div class="col-sm-10">
                            <button class="btn btn-primary">点此选择文件</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">课程名称:</label>
                        <div class="col-sm-10 form-inline">
                            <select name="" class="form-control">
                                <option value="">保洁</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">课程章节:</label>
                        <div class="col-sm-10 form-inline">
                            <select name="" class="form-control">
                                <option value="">第一节</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">课程标题:</label>
                        <div class="col-sm-10 form-inline">
                            <select name="" class="form-control">
                                <option value="">保洁与催乳师的区别</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">培训老师:</label>
                        <div class="col-sm-10 form-inline">
                            <select name="" class="form-control">
                                <option value="">刘磊</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">培训时间范围:</label>
                        <div class="col-sm-10 form-inline">
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-primary">确定</button>
                            <button type="submit" class="btn btn-default">取消</button>
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
                msg: 'Welcome to Your Vue.js App111'
            }
        },
        mounted(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
