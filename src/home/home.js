import draggable from 'vuedraggable'

export default {
    components: {
        draggable,
    },
    name: 'home',
    data() {
        return {
            selectedDoc: {
                name: "测试",
                title: "主任医师",
                apptSetting: {
                    amount: 10,
                    daysAhead: 3,
                    interval: 0.5
                },
                appts: [
                    {id: 1, name: '张大全1', sex: '男', apptMethod: 1, reservationNum: 231},
                    {id: 2, name: '王小二1', sex: '男', apptMethod: 1, reservationNum: 232},
                    {id: 3, name: '李翠花1', sex: '女', apptMethod: 1, reservationNum: 233},
                    {id: 4, name: '王如花1', sex: '女', apptMethod: 0, reservationNum: 234},
                    {id: 5, name: '林狗蛋1', sex: '男', apptMethod: 0, reservationNum: 235},
                    {id: 6, name: '林狗蛋2', sex: '男', apptMethod: 0, reservationNum: 236},
                    {id: 7, name: '林狗蛋3', sex: '男', apptMethod: 0, reservationNum: 237},
                    {id: 8, name: '林狗蛋4', sex: '男', apptMethod: 0, reservationNum: 238},
                    {id: 9, name: '林狗蛋5', sex: '男', apptMethod: 0, reservationNum: 239},
                    {id: 10, name: '林狗蛋6', sex: '男', apptMethod: 0, reservationNum: 2310},
                    {id: 11, name: '林狗蛋7', sex: '男', apptMethod: 0, reservationNum: 2311},
                    {id: 12, name: '林狗蛋8', sex: '男', apptMethod: 0, reservationNum: 2312},
                    {id: 13, name: '张大全2', sex: '男', apptMethod: 1, reservationNum: 2313},
                    {id: 14, name: '王小二2', sex: '男', apptMethod: 1, reservationNum: 2314},
                    {id: 15, name: '李翠花2', sex: '女', apptMethod: 1, reservationNum: 2315},
                    {id: 16, name: '王如花2', sex: '女', apptMethod: 0, reservationNum: 2316},
                    {id: 17, name: '林狗蛋9', sex: '男', apptMethod: 0, reservationNum: 2317}
                ]
            },
            loading: false,
            doctorId: this.$route.query.doctorId,
            hasChange: 0,
        };
    },
    created() {
        this.getdata(this.$route.query.doctorId);
    },
    watch: {
        '$route'(to, from) {
            this.getdata(this.$route.query.doctorId);
        }
    },
    methods: {
        //获取URL传递的参数this.$route.query
        getdata(doctorId) {
            this.axios.get('/appts', {
                params: {
                    doctorId: doctorId,
                }
            }).then(function (response) {
                let data = response.data;

            }).catch(function (error) {
                console.log(error);
            });
        },
        updatePatientsList(evt) {
            // console.log('拖动前的索引 :' + evt.oldIndex);
            // console.log('拖动后的索引 :' + evt.newIndex);
            let doctorId = this._routerRoot._route.query.doctorId;
            this.axios.get('appts/patient', {
                params: {
                    doctorId: doctorId,
                    oldIndex: evt.oldIndex,
                    newIndex: evt.newIndex
                }
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        },
        timeSet() {
            let _this = this;
            console.log("aaa" + this.hasChange);
            if (this.hasChange == 1) {
                this.axios.get('/appts/timeSet', {
                    params: {
                        doctorId: doctorId,
                        timeSet: _this.selectedDoc.apptSetting,
                    }
                }).then(function (response) {
                    _this.inputChange(0);

                }).catch(function (error) {
                    console.log(error);
                });
            }
        },
        inputChange: (state) => {
            this.hasChange = state;
        }
    }


};