export default {
  name: 'app',
  data() {
    return {
      home: [
        {id: 1, name: '王丽', selected: 1},
        {id: 2, name: '张三', selected: 0},
        {id: 3, name: '李四', selected: 0},
        {id: 4, name: '王五', selected: 0}
      ],
      doctorId: 1,
    };
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
};
