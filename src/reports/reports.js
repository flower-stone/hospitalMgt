export default {
    name: 'hello',
    data() {
        return {
            pageOne: {
                title: {
                    text: '医院床位使用情况',
                    subtext: '',
                },
                data: [
                    {value: 610, name: '已使用'},
                    {value: 255, name: '未使用'}
                ]
            },
            pageTwo: {
                title: '近一周手术情况',
                data: {
                    values: [610, 255, 610, 255, 610, 255, 610],
                    names: ['9月1日', '9月2日', '9月3日', '9月4日', '9月5日', '9月6日', '9月7日']
                }
            },
            pageThree: {
                title: {
                    text: '门诊VS住院',
                    subtext: null,
                },
                data: [
                    {value: 2100, name: '门诊'},
                    {value: 525, name: '住院'}
                ]
            },
            pageFour: {
                title: {
                    text: '预约渠道',
                    subtext: '',
                },
                data: [
                    {value: 610, name: '线上预约'},
                    {value: 255, name: '先下预约'}
                ]
            },
            pageId: "",
        }

    },
    watch: {
        '$route'(to, from) {
            this.pageId = this.$route.query.type;
            if (this.pageId == 1) {
                this.drawPie(this.pageOne);
            } else if (this.pageId == 2) {
                this.drawLine(this.pageTwo);
            }else if (this.pageId == 3) {
                this.drawPie(this.pageThree);
            }else if (this.pageId == 4) {
                this.drawPie(this.pageFour);
            }
        }
    }
    ,
// mounted(){
//     // this.drawLine();
//     if(this.$route.query.type==1){
//         this.drawPie(this.darwPieData);
//     }else{
//         this.drawLine();
//     }
//
// },
    methods: {
        drawLine(darwData) {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: {text: darwData.title},
                xAxis: {
                    data: darwData.data.names
                },
                yAxis: {},
                series: [{
                    name: '手术情况',
                    type: 'bar',
                    data: darwData.data.values
                }]
            });
        },
        drawPie(darwData) {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: {
                    text: darwData.title.text,
                    subtext: darwData.title.subtext,
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                //图形底部注释
                // legend: {
                //     x : 'center',
                //     y : 'bottom',
                //     data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
                // },
                series: [
                    {
                        type: 'pie',
                        radius: '65%',
                        center: ['50%', '50%'],
                        selectedMode: 'single',
                        data: darwData.data
                    }
                ],
                // color:['#91c7ae','#61a0a8']
            });
        }
        ,
    }
}
// 基于准备好的dom，初始化echarts实例


