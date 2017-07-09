var rpn = require(getApp().data.require_kexuejisuanqi_data)
var jisuan = require(getApp().data.require_fudianshu_bug)
Page({
  onShareAppMessage: function () {
    return {
      title: '裕睿数学小工具',
      path: '/pages/math_jisuangongju/kexuejisuan/kexuejisuan'
    }
  },
  data:{
    input_BKC:"black",
    is_show_:0,
    is_show_Inv:0,
    is_show_F_E:0,
    font_size: "180%",
    font_size_value:"180%",
    radioItems: [                                       
      {name: '度', value: 'du' },
      {name: '弧度', value: 'hudu' , checked: 'true'},
      {name: '梯度', value: 'tidu' }
    ],
    id1:"MC",id2:"MR",id3:"MS",id4:"M+",id5:"M-",        
    id6:"←" ,id7:"CE",id8:"C" ,id9:"±" ,id10:"sqrt",
    id11:"7",id12:"8",id13:"9",id14:"/",id15:"%",
    id16:"4",id17:"5",id18:"6",id19:"*",id20:"reciproc",
    id21:"1",id22:"2",id23:"3",id24:"-",id25:"=",
    id26:"0",id27:".",id28:"+",id30:"ln",id31:"(",id32:")",
    id33:"Int",id34:"sinh",id35:"sin",id36:"sqr",id37:"fact",
    id38:"dms",id39:"cosh",id40:"cos",id41:"^",id42:"y/xy",
    id43:"π",  id44:"tanh",id45:"tan",id46:"cube",id47:"cuberoot",
    id49:"Exp",id50:"Mod",id51:"log",id52:"powten",
    id53:"asin",id54:"acos",id55:"atan",id56:"powe",id57:"asinh",
    id58:"acosh",id59:"atanh",id60:"frac",id61:"2*π",
    ms_data:0,                                          
    screenData:"0",                                     
    screenData_value:"0",                              
    memery_show:0,                                      
    lastIsOperator: false,                              
  },
  hidden:function(e){
    if(this.data.input_BKC == 'gray')
    {
      this.setData({
        input_BKC:'black',
        is_show_:0
      })
    }
  },
  input_Data :function(event){
    this.setData({
      screenData:event.detail.value
    }) 
  },
  input_focus:function(e){
    if(this.data.input_BKC == 'black')
    {
      this.setData({
        input_BKC:'gray',
        is_show_:1
      })
    }
  },
  my_data:{
    Temp_size : null,
    Temp_size_01 : null,
    Temp_num : null
  },
  change_size:function(data,font_size){
          if(0 <= data.length && data.length<=15)
          {
              this.setData({
                          [font_size]: '180%'
                        })
          }
          if(15<data.length && data.length<21)    
          {
            this.setData({
                          [font_size]: '150%'
                        })
          }
          if(21<=data.length && data.length<27)  
          {
            this.setData({
                          [font_size]: '120%'
                        })
          }
          if(27<=data.length && data.length<= 31) 
          {
            this.setData({
                          [font_size]: '100%'
                        })
          }
          if(27<=data.length && data.length<= 31)  
          {
            this.setData({
                          [font_size]: '90%'
                        })
          }
          if(31<=data.length && data.length<= 37)  
          {
            this.setData({
                          [font_size]: '80%'
                        })
          }
  },
  clickButton:function(event){
    var reg_num_kuohao = /[^\)0-9]/g; 
    var reg_num_dot = /[^.0-9]/g; 
    var reg_num_kuohao_dot = /[^.\)0-9]/g;
    var data = this.data.screenData.toString();  
    this.change_size(data,'font_size');
    var data_value = this.data.screenData_value.toString();
    var id = event.target.id;
    if(id == this.data.id6) { 
      if(data == 0){
        return;
      }
      var data = data.substring(0,data.length-1);
    } else if(id == this.data.id8) {
      data = 0;
    }
    else if (id == 'id_input') 
    {
      if(this.data.input_BKC == 'black')
      {
        this.setData({
          input_BKC:'gray',
          is_show_:1
        })
      }
      else
      { 
         this.setData({
          input_BKC:'black',
          is_show_:0
        })
      }
    }
    else if(id == 'id_Inv')
    {
      if(this.data.is_show_Inv == 0)
      {
        this.setData({
          is_show_Inv: 1
        })
      }
      else
      { 
         this.setData({
          is_show_Inv: 0
        })
      }
    }
    else if(id == 'id_F_E')
    {
      if(this.data.is_show_F_E == 0)
      {
        this.setData({
          is_show_F_E: 1
        })
        if(this.deal_kxjs(data) == null)
        {
          return;
        }
        else
        {
          data = this.deal_kxjs(data);
        }
      }
      else
      { 
         this.setData({
          is_show_F_E: 0
        })
        var reg_group_0 = data.match(/(\([0-9.]+e\+[0-9]+\))|(\([0-9.]+e[0-9]+\))/g);
        if(reg_group_0 != null)
        {
            data = data.replace(/(\([0-9.]+e\+[0-9]+\))|(\([0-9.]+e[0-9]+\))/g,'#');
            for(var w = 0;w < reg_group_0.length; w++)
            {
                reg_group_0[w] = reg_group_0[w].substring(1,reg_group_0[w].length-1);
            }
            for(var q = 0;q< reg_group_0.length; q++)
            {
              if(reg_group_0[q].indexOf('e+') != -1)
              {
                var be = reg_group_0[q].substring(-1,reg_group_0[q].indexOf('e+'));
                var af = reg_group_0[q].substring(reg_group_0[q].indexOf('e+')+2);
                reg_group_0[q] = String(jisuan.mul(Number(be),Math.pow(10,Number(af))));
              }
              else
              {
                var be_ = reg_group_0[q].substring(-1,reg_group_0[q].indexOf('e'));
                var af_ = reg_group_0[q].substring(reg_group_0[q].indexOf('e')+1);
                reg_group_0[q] = String(jisuan.mul(Number(be_),Math.pow(10,Number(af_))));
              }
            }
            for(var e = 0 ; e< reg_group_0.length ; e++)
            {
              data = data.replace(/[#]/,reg_group_0[e]);             
            }
         }
        var reg_group_1 = data.match(/(\([0-9.]+e\-[0-9]+\))/g);
        if(reg_group_1 != null)
        {
           data = data.replace(/(\([0-9.]+e\-[0-9]+\))/g,'#');
            for(var w1 = 0;w1 < reg_group_1.length; w1++)
            {
                reg_group_1[w1] = reg_group_1[w1].substring(1,reg_group_1[w1].length-1);
            }
            for(var q1 = 0;q1< reg_group_1.length; q1++)
            {
              if(reg_group_1[q1].indexOf('e-') != -1)
              {
                var be1 = reg_group_1[q1].substring(-1,reg_group_1[q1].indexOf('e-'));
                var af1 = reg_group_1[q1].substring(reg_group_1[q1].indexOf('e-')+2);
                reg_group_1[q1] = String(jisuan.div(Number(be1),Math.pow(10,Number(af1))));
              }              
            }
            for(var e1 = 0 ; e1< reg_group_1.length ; e1++)
            {
              data = data.replace(/[#]/,reg_group_1[e1]);             
            }
        }

      }
    }
    else if(id == this.data.id7){
      data_value = 0;
    }
    else if( id == this.data.id3)
    {
      if(data_value != 0)
        this.setData({
          ms_data : data_value,
          memery_show:1     
        })
    }
    else if( id == this.data.id2) 
    {
      if(data == 0)
        data = this.data.ms_data;
      else if(this.data.ms_data ==0)
        data = 0;
      else
        data = data+this.data.ms_data;
    }
    else if( id == this.data.id1)
    {
      if(this.data.memery_show == 1)
        this.setData({
        ms_data : 0,
        memery_show:0
      })
    }
    else if( id == this.data.id4){
        if(this.data.memery_show ==0)
         return;
         var mplus_result =  jisuan.add(this.data.ms_data,data_value)
        this.setData({
          ms_data : mplus_result
        })
    }
    else if( id == this.data.id5){
        if(this.data.memery_show ==0)
         return;
         var mplus_result =  jisuan.sub(this.data.ms_data,data_value)
        this.setData({
          ms_data : mplus_result
        })
    }
    else if(id == this.data.id43){
      if(data == 0)
        data = Math.PI;
      else
        data = data+Math.PI;
      this.setData({lastIsOperator:false});
    }
    else if(id == this.data.id61){
      if(data == 0)
        data = jisuan.mul(Math.PI,2);
      else
        data = data+jisuan.mul(Math.PI,2);
      this.setData({lastIsOperator:false}); 
    }
    else if (id == this.data.id9) {
      if(data == 0)
       return;
      var firstWord = data.substring(0,1);
      if(firstWord != '-'){
        data = '-' + data;
      } else {
        data = data.substring(1);
      }
    } 
    else if( id == this.data.id32)
    {
      	var result = data.match(/[\(]/g);
	      var count_1 = !result ? 0 : result.length;
        result = data.match(/[\)]/g);
        var count_2 = !result ? 0 : result.length;  
        if(count_1 > count_2 && !reg_num_kuohao.test(data[data.length-1]))
             data = data + id;
        else
          return;
    }
    else if(id == this.data.id31)
    {
        if(data == 0)
        {
          data = id;
        }
        else if(!reg_num_dot.test(data[data.length-1]))
          return;
        else 
          data=data +id;
    }
    else if(id == this.data.id10 || id == this.data.id20 || id ==this.data.id30 || id ==this.data.id34 || id ==this.data.id35 || id ==this.data.id36 || id ==this.data.id37 || id ==this.data.id38 || id ==this.data.id39 || id ==this.data.id40 || id ==this.data.id44 || id ==this.data.id45 || id ==this.data.id46 || id ==this.data.id47 || id ==this.data.id51 || id ==this.data.id52 || id ==this.data.id53 || id ==this.data.id54 || id ==this.data.id55 || id ==this.data.id56 || id ==this.data.id33 || id ==this.data.id57 || id ==this.data.id58 || id ==this.data.id59 || id ==this.data.id60){
      var lastWord = data.substring(data.length-1, data.length);
      if(reg_num_kuohao_dot.test(lastWord))
      {
        data = data + id;
        this.setData({lastIsOperator:true});
      }
          
      else if(data == 0)        
          {
            data = id;
            this.setData({lastIsOperator:true});
          }
      else
         data = data.substring(-1,data.lastIndexOf(rpn.getLastNumberStr_fixed(data)))+id+rpn.getLastNumberStr_fixed(data);

    }
else if (id == this.data.id25){      
    if(this.data.is_show_F_E == 1)
    {      
      if(this.deal_kxjs(data) == null)
      {
        return;
      }
      else
      {
        data = this.deal_kxjs(data);
      }
    }
      if(data == 0) {
        data_value = data;
      }
      var lastWord = data.substring(data.length-1, data.length);
      if(reg_num_kuohao.test(lastWord)) {
        return;
      }
      if(parseFloat(data) == data){
        data_value = data;
      }
      if(this.data.radioItems[0].checked == true)
      {
        var choose_du = 0;
      }
      else if(this.data.radioItems[1].checked == true)
      {
        var choose_du = 1;
      }
      else if(this.data.radioItems[2].checked == true)
      {
        var choose_du = 2;
      }
      var cal_value = data;
      if(this.data.is_show_F_E == 1)
      {
        var reg_gr = cal_value.match(/(\([0-9.]+e\+[0-9]+\))|(\([0-9.]+e\-[0-9]+\))|(\([0-9.]+e[0-9]+\))/g);
        if(reg_gr != null)
        {
          cal_value = cal_value.replace(/(\([0-9.]+e\+[0-9]+\))|(\([0-9.]+e\-[0-9]+\))|(\([0-9.]+e[0-9]+\))/g,'#');
          for(var r =0 ; r< reg_gr.length ;r++)
          {
            reg_gr[r] = reg_gr[r].substring(1,reg_gr[r].length-1);
          }
          for(var t =0 ; t< reg_gr.length ;t++)
          {
              cal_value = cal_value.replace(/[#]/,reg_gr[t]);
          }
        }
      }
      data_value = rpn.calCommonExp(cal_value,choose_du);
      if(this.data.is_show_F_E == 1)
      {
        data_value = this.deal_number_kxjs(String(data_value));
      }
      if(typeof(data_value) == 'undefined')
      data_value = "error"
    } 
    else {
      if(id == this.data.id28 || id == this.data.id24 || id == this.data.id19 || id == this.data.id14 ||id == this.data.id15 || id == this.data.id41 || id == this.data.id42 ||id == this.data.id15) {
        if(this.data.lastIsOperator || data == 0) {
          return;
        }
      }
      if(data == '0' && id != this.data.id27) {
        data = id;
      } else {
        data = data + id
      }
      if(id == this.data.id28 || id == this.data.id24 || id == this.data.id19 || id == this.data.id14 ||id == this.data.id15 || id == this.data.id41 || id == this.data.id42 ||id == this.data.id15) {
        this.setData({lastIsOperator:true});
      } else {
        this.setData({lastIsOperator:false})
      }
    }
    this.change_size(data_value,'font_size_value');
    this.setData({
        screenData:data ,
        screenData_value: data_value
    })
  },
deal_kxjs : function(data){
      var data_value = null;
      var reg_e = data.match(/e{1}/g);
      var reg_group = data.match(/(\([0-9.]+e\+[0-9]+\))|(\([0-9.]+e\-[0-9]+\))|(\([0-9.]+e[0-9]+\))/g);
      if(reg_group !=null)
      {
            if(reg_e.length != reg_group.length)
            {
              data_value = 'error input';
              this.setData({
              screenData_value: data_value
              })
              return;       
            }
            
            if(reg_group.length > 0)
            {
                data = data.replace(/(\([0-9.]+e\+[0-9]+\))|(\([0-9.]+e\-[0-9]+\))|(\([0-9.]+e[0-9]+\))/g,'#');
                data = this.deal_number_kxjs(data);                               
                for(var i =0 ; i<reg_group.length ; i++)
                {
                  data = data.replace(/[#]/,reg_group[i])
                }
              }
      }
      else
      {
          if(reg_e != null)
          {
            data_value = 'error input';
            this.setData({
            screenData_value: data_value
            })
            return;       
          }
          data = this.deal_number_kxjs(data);
      }
      return data;
},
deal_number_kxjs : function(data){

    var num_group = data.match(/[0-9.]+/g);
    data = data.replace(/[0-9.]+/g,'@');
    if(num_group != null)
    {
        for(var n = 0 ; n < num_group.length ; n++)
        {                     
            if(num_group[n].indexOf('.') != -1)
            {
                if(Number(num_group[n]) > 1)
                { 
                  var weishu = num_group[n].indexOf('.')-1;
                  num_group[n] = num_group[n].replace('.','');
                  var before = num_group[n][0];
                  var after = num_group[n].substring(1);
                  num_group[n] = '('+before+'.'+after+'e+'+weishu+')';
                }
                else
                {
                  var weishu_Temp =  num_group[n].search(/[^0.]/)-1;
                  num_group[n] = num_group[n].substring(weishu_Temp+1);                 
                  if(num_group[n].length == 1)
                  {
                    num_group[n] = '('+num_group[n]+'e-'+weishu_Temp+')';
                  }
                  else
                  {
                      var before_Temp = num_group[n][0];
                      var after_Temp = num_group[n].substring(1);
                      num_group[n] = '('+before_Temp+'.'+after_Temp+'e-'+weishu_Temp+')';
                  }
                }
            }
            else
            {
              if(num_group[n].replace(/[0]/g,'').length == 1)
              {
                var Temp_weishu_ = num_group[n].length-1;
                var Temp = num_group[n].replace(/[0]/g,'');
                num_group[n] = '('+Temp+'e+'+Temp_weishu_+')';
              }
              else
              {
                var Temp_weishu = num_group[n].length-1;
                var Temp_before = num_group[n][0];
                var Temp_after = num_group[n].substring(1);
                num_group[n] = '('+Temp_before+'.'+Temp_after+'e+'+Temp_weishu+')';
              }
            }           
        }
        for(var k =0 ; k<num_group.length ; k++)
        {
          data = data.replace(/[@]/,num_group[k])
        }
    }
    return data;
},
radioChange: function(e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.radioItems.length; i ++) {
      if (checked == this.data.radioItems[i].name) {
        changed['radioItems['+i+'].checked'] = true
      } else {
        changed['radioItems['+i+'].checked'] = false
      }
    }
    this.setData(changed)
  },
  shuru:function(e){
    this.setData({
      jisuan_data:e.detail.value
    })
  },
  querenjisuan:function()
  {
    this.setData({
      text_data:rpn.calCommonExp(this.data.jisuan_data)
    });
  },
  onLoad:function(options){
    this.setData({
      text_data_math :Math.asin(0.2)
    })   
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})