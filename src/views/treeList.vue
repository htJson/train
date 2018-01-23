<template>
    <div class="side_right">
        <div class="ab_bg_white ab_Title" style="">
            <h4>培训视频<router-link to="/addTrainVideo" class="btn btn-sm btn-primary pull-right"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;添加</router-link></h4>
        </div>
        <div class="container-fluid ab_style " id="table-cont">
            <table class="table table-striped" id="tabList">
                <thead>
                <tr>
                    <td>头</td>
                    <td>头</td>
                    <td>头</td>
                    <td>头</td>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[
                    {
                        id:'15',
                        name:'第a级',
                        arr:[],
                        upTime:'2019/12/23 12:00:00',
                        downTime:'2019/12/23 12:00:00',
                        status:true,
                        child:[
                            {
                                id:"29",
                                arr:[15,29],
                                name: '第二级a',
                                upTime: '2019/12/23 12:00:0033333',
                                downTime: '2019/12/23 12:00:00',
                                status: true,
                                child:[

                                ]
                            },
                            {
                                id:"25",
                                name: '第二级b',
                                arr:[15,25],
                                upTime: '2019/12/23 12:00:0033333',
                                downTime: '2019/12/23 12:00:00',
                                status: true,
                                child:[
                                    {
                                        id:'249',
                                        arr:[15,25,249],
                                        name: '第三级',
                                        upTime: '2019/12/23 12:00:004444',
                                        downTime: '2019/12/23 12:00:00',
                                        status: true,
                                        child:[
                                           {
                                                id:'389',
                                                arr:[15,25,249,389],
                                                name: '第四级',
                                                upTime: '2019/12/23 12:00:004444',
                                                downTime: '2019/12/23 12:00:00',
                                                status: true,
                                                child:[
                                                    {
                                                        id:'345',
                                                        arr:[15,25,249,389,345],
                                                        name: '第五级',
                                                        upTime: '2019/12/23 12:00:004444',
                                                        downTime: '2019/12/23 12:00:00',
                                                        status: true,
                                                        child:[
                                                            
                                                        ]
                                                    } 
                                                ]
                                            } 
                                        ]
                                    }
                                ]
                            },
                            {
                                id:"23",
                                name: '第二级c',
                                arr:[15,23],
                                upTime: '2019/12/23 12:00:0033333',
                                downTime: '2019/12/23 12:00:00',
                                status: true,
                                child:[
                                    {
                                        id:'240',
                                        name: '第三级',
                                        arr:[15,23,240],
                                        upTime: '2019/12/23 12:00:004444',
                                        downTime: '2019/12/23 12:00:00',
                                        status: true,
                                        child:[

                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id:'33',
                        name:'第b级',
                        arr:[],
                        upTime:'2019/12/23 12:00:00',
                        downTime:'2019/12/23 12:00:00',
                        status:true,
                        child:[
                            {
                                id:"43",
                                name: '第二级',
                                arr:[33,43],
                                upTime: '2019/12/23 12:00:00',
                                downTime: '2019/12/23 12:00:00',
                                status: true,
                                child:[
                                    {
                                        id:'31',
                                        arr:[33,43,31],
                                        name: '第三级a',
                                        upTime: '2019/12/23 12:00:00',
                                        downTime: '2019/12/23 12:00:00',
                                        status: true,
                                        child:[
                                            {
                                                id:'5',
                                                name: '第四级',
                                                arr:[33,43,31,5],
                                                upTime: '2019/12/23 12:00:00',
                                                downTime: '2019/12/23 12:00:00',
                                                status: true,
                                                child:[

                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        id:'39',
                                        name: '第三级b',
                                        arr:[33,43,39],
                                        upTime: '2019/12/23 12:00:00',
                                        downTime: '2019/12/23 12:00:00',
                                        status: true,
                                        child:[
                                            {
                                                id:'5',
                                                name: '第四级',
                                                arr:[33,43,39,5],
                                                upTime: '2019/12/23 12:00:00',
                                                downTime: '2019/12/23 12:00:00',
                                                status: true,
                                                child:[

                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id:'00',
                        name:'第c级',
                        arr:[],
                        upTime:'2019/12/23 12:00:00',
                        downTime:'2019/12/23 12:00:00',
                        status:true,
                        child:[

                        ]
                    },
                    {
                        id:'32',
                        name:'第d级',
                        arr:[],
                        upTime:'2019/12/23 12:00:00',
                        downTime:'2019/12/23 12:00:00',
                        status:true,
                        child:[

                        ]
                    },
                    {
                        id:'',
                        name:'第e级',
                        arr:[],
                        upTime:'2019/12/23 12:00:00',
                        downTime:'2019/12/23 12:00:00',
                        status:true,
                        child:[]
                    }
                ],
                result:'',
                ml:15,
            }
        },
        mounted(){
            this.eachList(this.list,0)
            $('#tabList').find("tbody").html(this.result);
            this.event();
        },
        methods:{
            eachList(data){
                if(data.length==0 && typeof data != 'object'){return false};
                for(let i=0; i<data.length; i++) {
                    if(data[i].child !='undefined' && data[i].child.length>0){
                        this.result += "<tr class='"+data[i].arr.join(' ')+"' nid="+data[i].id+" isOpen='1'><td><div class='item' style='padding-left:"+this.ml*data[i].arr.length+"px; cursor:pointer;'><span class='glyphicon glyphicon-triangle-bottom'></span>" + data[i].name + "</div></td><td>" + data[i].upTime + "</td><td>" + data[i].downTime + "</td><td>" + data[i].status + "</td></tr>";
                        this.eachList(data[i].child)
                    }else{
                        this.result += "<tr class='"+data[i].arr.join(' ')+"' nid="+data[i].id+" isOpen='1'><td><div class='item' style='padding-left:"+this.ml*data[i].arr.length+"px; cursor:pointer;'>"+ data[i].name + "</div></td><td>" + data[i].upTime + "</td><td>" + data[i].downTime + "</td><td>" + data[i].status + "</td></tr>";
                    }
                }
            },
            event(){
                $('#tabList').on('click','.item',function(){
                    var ps=$(this).parents('tr').attr('nid');
                    var isOpen=$(this).parents('tr').attr('isOpen');
                    $('#tabList tbody').find('tr').each(function(){
                        if($(this).hasClass(ps)){
                            if(isOpen!='1'){
                                $(this).css('display','table-row').attr('isOpen','1');
                            }else {
                                $(this).css('display', 'none').attr('isOpen','0');
                            }
                        }
                    })

                    if(isOpen == '1'){
                        $(this).parents('tr').attr('isOpen','0')
                    }else{
                        $(this).parents('tr').attr('isOpen','1')
                    }

                    $(this).parents('tr').css('display','table-row')
                    return false;
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
