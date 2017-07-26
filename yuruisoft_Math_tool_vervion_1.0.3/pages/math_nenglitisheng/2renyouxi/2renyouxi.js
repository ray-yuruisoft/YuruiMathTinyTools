var rpn = require("../../../utils/2renyouxi.js")
Page({
  data: {
    web_request: false,
    question_data_player_1: null,
    question_data_player_2: null,
    player_1_score: 0,
    player_2_score: 0,
    countof_player_1: "0/10",
    countof_player_2: "0/10",
    error_show_player_1: 0,
    error_show_player_2: 0,
    time_ctrl_player_1: 0,
    time_ctrl_player_2: 0,
    is_first_player_1: true,
    is_first_player_2: true,
    Timeouter: 0,
    "panel_Data": {
      view_isshow: false,
      player_1_score: "",
      player_2_score: ""
    },
    one_player_judge: true,
    NLTS_XXSJ_id: ""
  },

  do_again: function () {
    var panel_Data = {};
    panel_Data.view_isshow = false;
    this.setData({
      panel_Data: panel_Data,
      player_1_score: 0,
      player_2_score: 0,
      error_show_player_1: 0,
      error_show_player_2: 0,
      countof_player_1: "0/10",
      countof_player_2: "0/10",
    })
    rpn.initialize(this, this.data.NLTS_XXSJ_id);
  },
  player_1_right_click: function () {
    if (!this.data.is_first_player_1) {
      rpn.clear_time_out(1);
      this.setData({
        time_ctrl_player_1: 0,
      });
    }
    if (this.data.is_first_player_1 == true) {
      this.setData({
        is_first_player_1: false
      })
    }
    rpn.time_ctrl(this, "time_ctrl_player_1");
    rpn.proc(this, true, "player_1_score", "countof_player_1", "question_data_player_1", this.data.NLTS_XXSJ_id, "error_show_player_1");
  },
  player_1_wrong_click: function () {
    if (!this.data.is_first_player_1) {
      rpn.clear_time_out(1);
      this.setData({
        time_ctrl_player_1: 0
      });
    }
    if (this.data.is_first_player_1 == true) {
      this.setData({
        is_first_player_1: false
      })
    }
    rpn.time_ctrl(this, "time_ctrl_player_1");
    rpn.proc(this, false, "player_1_score", "countof_player_1", "question_data_player_1", this.data.NLTS_XXSJ_id, "error_show_player_1");
  },
  player_2_right_click: function () {

    if (!this.data.is_first_player_2) {
      rpn.clear_time_out(2);
      this.setData({
        time_ctrl_player_2: 0
      });
    }
    if (this.data.is_first_player_2 == true) {
      this.setData({
        is_first_player_2: false
      })
    }
    rpn.time_ctrl(this, "time_ctrl_player_2");
    rpn.proc(this, true, "player_2_score", "countof_player_2", "question_data_player_2", this.data.NLTS_XXSJ_id, "error_show_player_2");
  },
  player_2_wrong_click: function () {
    if (!this.data.is_first_player_2) {
      rpn.clear_time_out(2);
      this.setData({
        time_ctrl_player_2: 0
      });
    }
    if (this.data.is_first_player_2 == true) {
      this.setData({
        is_first_player_2: false
      })
    }
    rpn.time_ctrl(this, "time_ctrl_player_2");
    rpn.proc(this, false, "player_2_score", "countof_player_2", "question_data_player_2", this.data.NLTS_XXSJ_id, "error_show_player_2");
  },
  onLoad: function (options) {
    if (options.NLTS_id == 1) {
      this.setData({
        one_player_judge: true
      })
    }
    else if (options.NLTS_id == 2) {
      this.setData({
        one_player_judge: true,
        web_request: true

      })
    }
    else if (options.NLTS_id == 3) {
      this.setData({
        one_player_judge: false
      })
    }
    if (options.NLTS_XXSJ_id == 1) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul5"
      })
    }
    else if (options.NLTS_XXSJ_id == 2) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul11"
      })
    }
    else if (options.NLTS_XXSJ_id == 3) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul12"
      })
    }
    else if (options.NLTS_XXSJ_id == 4) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul25"
      })
    }
    else if (options.NLTS_XXSJ_id == 5) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul50"
      })
    }
    else if (options.NLTS_XXSJ_id == 6) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_two_decade"
      })
    }
    else if (options.NLTS_XXSJ_id == 7) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_two_decade_10"
      })
    }
    else if (options.NLTS_XXSJ_id == 8) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_two_decade_10_10"
      })
    }
    else if (options.NLTS_XXSJ_id == 9) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_less_100"
      })
    }
    else if (options.NLTS_XXSJ_id == 10) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_more_100"
      })
    }
    else if (options.NLTS_XXSJ_id == 11) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_FOIL"
      })
    }
    else if (options.NLTS_XXSJ_id == 12) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_unit_1"
      })
    }
    else if (options.NLTS_XXSJ_id == 13) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_unit_2"
      })
    }
    else if (options.NLTS_XXSJ_id == 14) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_unit_3"
      })
    }
    else if (options.NLTS_XXSJ_id == 15) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_unit_4"
      })
    }
    else if (options.NLTS_XXSJ_id == 16) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_unit_5"
      })
    }
    else if (options.NLTS_XXSJ_id == 17) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_unit_6"
      })
    }
    else if (options.NLTS_XXSJ_id == 18) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_unit_7"
      })
    }
    else if (options.NLTS_XXSJ_id == 19) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_unit_8"
      })
    }
    else if (options.NLTS_XXSJ_id == 20) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_unit_9"
      })
    }
    else if (options.NLTS_XXSJ_id == 21) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_square_1"
      })
    }
    else if (options.NLTS_XXSJ_id == 22) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_square_4"
      })
    }
    else if (options.NLTS_XXSJ_id == 23) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_square_5"
      })
    }
    else if (options.NLTS_XXSJ_id == 24) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_square_9"
      })
    }
    else if (options.NLTS_XXSJ_id == 25) {
      this.setData({
        NLTS_XXSJ_id: "YGWS_mul_double_digit"
      })
    }
    rpn.initialize(this, this.data.NLTS_XXSJ_id);
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})