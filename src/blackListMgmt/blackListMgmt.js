export default {
    name: 'blackListMgmt',
    data() {
        return {
            key: '',
            search: {
                name: "",
                sex: "",
                age: "",
                card: ''
            },
            notFound: 1,
            list: [
                {
                    card: '007',
                    name: '张三',
                    reason: '长得太帅'
                }
            ],
            loading: false,
            loading2: false,
        };
    },
    created: function () {
        this.getBlackList();
    },
    methods: {
        patientSearch: function () {
            let _this = this;
            if (this.key) {
                this.loading = true;
                this.axios.get('http://www.hospital.com/patient', {
                    params: {
                        card: this.key
                    }
                }).then(function (response) {
                    let data = response.data;
                    _this.search = data[0];
                    _this.loading = false;
                }).catch(function (error) {
                    console.log(error);
                    _this.loading = false;
                });
            }
            else if (!this.key || this.key == "") {
                this.$alert('请输入卡号再查询', '提示', {
                    confirmButtonText: '确定'

                })
            }

        },
        addToBlackList: function () {
            let _this = this;
            this.$prompt('请输入加入黑名单的原因', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(({value}) => {
                let that = this;
                _this.axios.get('http://www.hospital.com/blacklist', {
                    params: {
                        card: _this.search.card,
                        reason: value
                    }
                }).then(function (response) {
                    that.$message({
                        type: 'success',
                        message: '已成功拉入黑名单'
                    });
                    let data = response.data;
                    console.log(data);
                }).catch(function (error) {
                    console.log(error);
                });
            })

        },
        getBlackList() {
            let _this = this;
            _this.loading2 = true;
            this.axios.get('http://www.hospital.com/blacklist').then(function (response) {
                _this.list = response.data;
                _this.loading2 = false;
            }).catch(function (error) {
                console.log(error);
                _this.loading2 = false;
            });
        },
        removeFromBlackList(card) {
            let _this = this;
            this.$confirm('确认将此用户移除黑名单？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let that = this;
                _this.axios.get('http://www.hospital.com/blacklist', {
                    params: {
                        card: card,
                    }
                }).then(function (response) {
                    that.$message({
                        type: 'success',
                        message: '移除成功'
                    });
                    _this.getBlackList();
                }).catch(function (error) {
                    console.log(error);
                });
            })

        }
    }
};