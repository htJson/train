<template>
    <div class="side_right">

        <div class="ab_bg_white ab_Title" >
            <div class="row">
                <ol class="breadcrumb ab_navRouter">
                    <li><router-link to="/training">培训需求列表</router-link></li>
                    <li>添加</li>
                </ol>
            </div>
        </div>
        <div class="container-fluid ab_style">
            <div style="width:1000px; margin:0 auto;">
                <form class="form-horizontal ab_mt20 col-sm-9" >
                    <div class="form-group">
                        <label for="inputEmail3" class="col-sm-2 control-label">合伙人:</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">培训时间范围:</label>
                        <div class="col-sm-10 form-inline">
                            <input type="text" class="form-control" placeholder="">
                            <label for="">至</label>
                            <input type="email" class="form-control" placeholder="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="" class="col-sm-2 control-label">培训时间范围:</label>
                        <div class="col-sm-10 form-inline">
                            <select name="" class="form-control" id="">
                                <option value="">32423432432</option>
                            </select>
                            <input type="email" class="form-control" placeholder="添写培训人员">

                            <button class="btn btn-primary"><span class="glyphicon glyphicon glyphicon-plus ab_font12"  aria-hidden="true"></span></button>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-primary">Sign in</button>
                            <button type="submit" class="btn btn-default">Sign in</button>
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
