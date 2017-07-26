var http = require('commonUtil.js')

var time_id_player_1,time_id_player_2
function time_ctrl(that,time_ctrl_player){
    var time_percent = that.data[time_ctrl_player];
    if(time_percent >= 100){
        if(time_ctrl_player == "time_ctrl_player_1")
        {
           that.setData({
                Timeouter : 1
            })
        }else{
            that.setData({
                Timeouter : 2
            })
        }
        game_over(that);
        return;
    }
    if(time_ctrl_player == "time_ctrl_player_1")
    {
        time_id_player_1 = setTimeout(function(){       
                time_percent++;
                that.setData({
                        [time_ctrl_player]:time_percent
                    });
                time_ctrl(that,time_ctrl_player)
                    }
                    ,100);
    }
    else
    {
        time_id_player_2 = setTimeout(function(){       
                time_percent++;
                that.setData({
                        [time_ctrl_player]:time_percent
                    });
                time_ctrl(that,time_ctrl_player)
                    }
                    ,100);
    }          
}
function clear_time_out(player_1){
    if(player_1 == 1)
    {
       clearTimeout(time_id_player_1);
    }
    else
    {
       clearTimeout(time_id_player_2);
    }
}

function game_over(that){
    var panel_Data = {};
    panel_Data.view_isshow = true;
    if(that.data.Timeouter == 1) 
    {
        panel_Data.player_1_score = "您因超时输了\n结果是"+that.data.player_1_score+":"+that.data.player_2_score;
        panel_Data.player_2_score = "您赢了\n结果是"+that.data.player_2_score+":"+that.data.player_1_score;       
    }
    else if(that.data.Timeouter == 2)
    {
        panel_Data.player_2_score = "您因超时输了\n结果是"+that.data.player_2_score+":"+that.data.player_1_score;
        panel_Data.player_1_score = "您赢了\n结果是"+that.data.player_1_score+":"+that.data.player_2_score;
        if(that.data.web_request == true)
                {
                    wx.showToast({
                        title: '服务器更新中',
                        icon: 'loading',
                        duration: 10000
                        })
                    wx.getStorage({
                        key: 'rd_session',
                        success: function(res) {
                          http.reqPOST('/Mathtool/AbilityScoredeal', {
                            "score": '-1',
                            "yuruisoft_session": res.data
                          }, function (res) {
                            if (res.UpdateDB == true)
                            {
                              wx.hideToast();
                              wx.showToast({
                                title: '服务器更新成功',
                                icon: 'success',
                                duration: 1000
                              })
                            }
                            wx.hideToast();
                            wx.showToast({
                              title: '服务器更新成功',
                              icon: 'success',
                              duration: 1000
                            })                            
                          });
                        } 
                        })               
                }
    }
    else{
            if(that.data.player_1_score>that.data.player_2_score)
            {
            panel_Data.player_1_score = "您赢了\n结果是"+that.data.player_1_score+":"+that.data.player_2_score;
            panel_Data.player_2_score = "您输了\n结果是"+that.data.player_2_score+":"+that.data.player_1_score;
                if(that.data.web_request == true)
                {
                    wx.showToast({
                        title: '服务器更新中',
                        icon: 'loading',
                        duration: 10000
                        })
                    wx.getStorage({
                        key: 'rd_session',
                        success: function(res) {
                          http.reqPOST('/Mathtool/AbilityScoredeal', {
                            "score": '-1',
                            "yuruisoft_session": res.data
                          }, function (res) {
                            if (res.UpdateDB == true) {
                              wx.hideToast();
                              wx.showToast({
                                title: '服务器更新成功',
                                icon: 'success',
                                duration: 1000
                              })
                            }
                            wx.hideToast();
                            wx.showToast({
                              title: '服务器更新成功',
                              icon: 'success',
                              duration: 1000
                            })
                          });
                        } 
                        })
                }
            }
            else
            {
            panel_Data.player_2_score = "您赢了\n结果是"+that.data.player_2_score+":"+that.data.player_1_score;
            panel_Data.player_1_score = "您输了\n结果是"+that.data.player_1_score+":"+that.data.player_2_score;
                if(that.data.web_request == true)
                {
                    wx.showToast({
                        title: '服务器更新中',
                        icon: 'loading',
                        duration: 10000
                        })
                    wx.getStorage({
                        key: 'rd_session',
                        success: function(res) {
                          http.reqPOST('/Mathtool/AbilityScoredeal', {
                            "score": '1',
                            "yuruisoft_session": res.data
                          }, function (res) {
                            if (res.UpdateDB == true) {
                              wx.hideToast();
                              wx.showToast({
                                title: '服务器更新成功',
                                icon: 'success',
                                duration: 1000
                              })
                            }
                            wx.hideToast();
                            wx.showToast({
                              title: '服务器更新成功',
                              icon: 'success',
                              duration: 1000
                            })
                          });
                        } 
                        })
                }
            }
    }
    
    that.setData({
        panel_Data:panel_Data,
        is_first_player_1:true,
        is_first_player_2:true,
        time_ctrl_player_1:0,
        time_ctrl_player_2:0,
        Timeouter:0
    })
    clear_time_out(1);
    clear_time_out(2);
}
function YGWS_mul5(){
var Random = 0;
while(Random < 0.1)
{
    Random = Math.random();
}
var if_num = Math.floor(Random*1000)-Math.floor(Random*100)*10;
var judge_num = Math.floor(Random*10000)-Math.floor(Random*1000)*10;
var error_num = Math.floor(Random*100000)-Math.floor(Random*10000)*10;
var operation_num = Math.floor(Random*1000000)-Math.floor(Random*100000)*10;
if(if_num % 3 == 0)
{
    Random = Math.floor((Random+1)*100);
}
else if(if_num % 3 == 1)
{
    Random = Math.floor((Random+2)*100);
}
else                      
{
    Random = Math.floor(Random*100);
}
var result = 0;
var judge_result = null;
if(judge_num%2 == 0)
{
    var str_before = null;
    var str_after = null;
    if(operation_num%2 == 0)
    {
        str_before = String(Math.floor(Random/2)+error_num%3+1);
    }
    else
    {
        str_before = String(Math.floor(Random/2)-error_num%3-1);
    }
    if(Random%2 == 1)
    {
        str_after = String(5);                              
    }
    else
    {
        str_after = String(0);
    }
    result = Number(str_before + str_after);
    judge_result = false;
}
else{
    result = Random * 5;
    judge_result = true;
}
var Question = String(Random)+"×5="+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}


function YGWS_mul25(){
var R = get_the_Random();
var result = 0;
var judge_result = null;
if(R.judge_num%2 == 0) 
{
    var str_before = String(Math.floor(R.Random/4));
    if(R.Random%4 == 0)
    {
        var str_after = '00';
    }
    else if(R.Random%4 == 1)
    {
        var str_after = '25';
    }
    else if(R.Random%4 == 2)
    {
        var str_after = '50';
    }
    else if(R.Random%4 == 3)
    {
        var str_after = '75';
    }
    if(str_before == '8' || str_before == '9')
    {
        str_before = String(Number(str_before)-R.error_num%2+1);
    }
    else if(str_before == '0' || str_before == '1')
    {
        str_before = String(Number(str_before)+R.error_num%2+1);
    }
    else
    {
        if(R.operation_num%2 == 0)
        {
            str_before = String(Number(str_before)+R.error_num%2+1);
        }
        else
        {
            str_before = String(Number(str_before)-R.error_num%2-1);
        }
    }
    
    result = Number(str_before + str_after);
    judge_result = false;
}
else{
    result = R.Random * 25;
    judge_result = true;
}
var Question = String(R.Random)+"×25="+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function YGWS_mul50(){
    var data = YGWS_mul5();
    data.Question = data.Question.substring(-1,data.Question.indexOf('×'))+"×50"+data.Question.substring(data.Question.indexOf('='))+'0';
    return data;
}
function YGWS_mul_two_decade(){
    var R  = get_the_Random();
var result = 0;
var judge_result = null;
if(R.Random.toString().length == 3)
{
    R.Random = R.Random.toString().substring(1);
}
var Str_mul_num = R.Random.toString().charAt(0)+R.multi_num.toString();
if(R.judge_num%2 == 0)
{
    var Temp_result = String(R.Random * Number(Str_mul_num));
    var str_before = Temp_result.substring(-1,Temp_result.length-2);
    var str_middle = Temp_result.charAt(Temp_result.length-2);
    var str_after = Temp_result.charAt(Temp_result.length-1);
    if(str_middle == '8' || str_middle == '9')
    {
        str_middle = String(Number(str_middle)-R.error_num%2+1);
    }
    else if(str_middle == '0' || str_middle == '1')
    {
        str_middle = String(Number(str_middle)+R.error_num%2+1);
    }
    else
    {
        if(R.operation_num%2 == 0)
        {
            str_middle = String(Number(str_middle)+R.error_num%2+1);
        }
        else
        {
            str_middle = String(Number(str_middle)-R.error_num%2-1);
        }
    }
    result = Number(str_before + str_middle +str_after);
    judge_result = false;
}
else{
    result = R.Random * Number(Str_mul_num);
    judge_result = true;
}
var Question = String(R.Random)+'×'+Str_mul_num+'='+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function YGWS_mul_two_decade_10(){
var R  = get_the_Random();
var result = 0;
var judge_result = null;
if(R.Random.toString().length == 3)
{
    R.Random = R.Random.toString().substring(1);
}
var Str_mul_num = R.Random.toString().charAt(0)+String((Number(10 - R.Random.toString().charAt(1))));
if(R.judge_num%2 == 0)
{
    var Temp_result = String(R.Random * Number(Str_mul_num));
    var str_before = Temp_result.substring(-1,Temp_result.length-2);
    var str_after = Temp_result.substring(Temp_result.length-2);
    if(R.operation_num%2 == 0)
    {
        str_before = String(Number(str_before)+R.error_num%2+1);
    }
    else
    {
        str_before = String(Number(str_before)-R.error_num%2-1);
    }
    result = Number(str_before + str_after);
    judge_result = false;
}
else{
    result = R.Random * Number(Str_mul_num);
    judge_result = true;
}
var Question = String(R.Random)+'×'+Str_mul_num+'='+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function YGWS_mul_two_decade_10_10(){
var R  = get_the_Random();
var result = 0;
var judge_result = null;
if(R.Random.toString().length == 3)
{
    R.Random = R.Random.toString().substring(1);
}
var Str_mul_num = String((Number(10 - R.Random.toString().charAt(0))))+R.Random.toString().charAt(1);
if(R.judge_num%2 == 0)
{
    var Temp_result = String(R.Random * Number(Str_mul_num));
    var str_before = Temp_result.substring(-1,Temp_result.length-2);
    var str_after = Temp_result.substring(Temp_result.length-2);
    if(R.operation_num%2 == 0)
    {
        str_before = String(Number(str_before)+R.error_num%2+1);
    }
    else
    {
        str_before = String(Number(str_before)-R.error_num%2-1);
    }
    result = Number(str_before + str_after);
    judge_result = false;
}
else{
    result = R.Random * Number(Str_mul_num);
    judge_result = true;
}
var Question = String(R.Random)+'×'+Str_mul_num+'='+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function YGWS_mul_less_100(){
var R  = get_the_Random();
var result = 0;
var judge_result = null;
if(R.Random.toString().length == 3)
{
    R.Random = R.Random.toString().substring(1);
}
var Str_mul_num_1 = String(100-Number(R.Random.toString().charAt(0)));
var Str_mul_num_2 = String(100-Number(R.Random.toString().charAt(1)));
if(R.judge_num%2 == 0)
{
    var Temp_result = String(Number(Str_mul_num_1) * Number(Str_mul_num_2));   
    var str_before = Temp_result.substring(-1,Temp_result.length-2);
    var str_after = Temp_result.substring(Temp_result.length-2);  
    if(R.operation_num%2 == 0)
    {
        str_before = String(Number(str_before)+R.error_num%2+1);
    }
    else
    {
        str_before = String(Number(str_before)-R.error_num%2-1);
    }
    result = Number(str_before + str_after);
    judge_result = false;
}
else{
    result = Number(Str_mul_num_1) * Number(Str_mul_num_2);
    judge_result = true;
}
var Question = Str_mul_num_1+'×'+Str_mul_num_2+'='+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function YGWS_mul_more_100(){
var R  = get_the_Random();
var result = 0;
var judge_result = null;
if(R.Random.toString().length == 3)
{
    R.Random = R.Random.toString().substring(1);
}
var Str_mul_num_1 = String(100+Number(R.Random.toString().charAt(0)));
var Str_mul_num_2 = String(100+Number(R.Random.toString().charAt(1)));
if(R.judge_num%2 == 0)
{
    var Temp_result = String(Number(Str_mul_num_1) * Number(Str_mul_num_2));
    var str_before = Temp_result.substring(-1,Temp_result.length-2);
    var str_after = Temp_result.substring(Temp_result.length-2);
    if(R.operation_num%2 == 0)
    {
        str_before = String(Number(str_before)+R.error_num%2+1);
    }
    else
    {
        str_before = String(Number(str_before)-R.error_num%2-1);
    }
    result = Number(str_before + str_after);
    judge_result = false;
}
else{
    result = Number(Str_mul_num_1) * Number(Str_mul_num_2);
    judge_result = true;
}
var Question = Str_mul_num_1+'×'+Str_mul_num_2+'='+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function YGWS_mul_FOIL(){
    var R  = get_the_Random();
    var R1 = get_the_Random();
var result = 0;
var judge_result = null;
if(R.Random.toString().length == 3)
{
    R.Random = R.Random.toString().substring(1);
}
if(R1.Random.toString().length == 3)
{
    R1.Random = R1.Random.toString().substring(1);
}
if(R.judge_num%2 == 0)
{
    var Temp_result = String(R.Random * R1.Random);
    var str_before = Temp_result.substring(-1,Temp_result.length-2);
    var str_middle = Temp_result.charAt(Temp_result.length-2);
    var str_after = Temp_result.charAt(Temp_result.length-1);
    if(str_middle == '8' || str_middle == '9')
    {
        str_middle = String(Number(str_middle)-R.error_num%2+1);
    }
    else if(str_middle == '0' || str_middle == '1')
    {
        str_middle = String(Number(str_middle)+R.error_num%2+1);
    }
    else
    {
        if(R.operation_num%2 == 0)
        {
            str_middle = String(Number(str_middle)+R.error_num%2+1);
        }
        else
        {
            str_middle = String(Number(str_middle)-R.error_num%2-1);
        }
    }
    result = Number(str_before + str_middle +str_after);
    judge_result = false;
}
else{
    result = R.Random * R1.Random;
    judge_result = true;
}
var Question = String(R.Random)+'×'+String(R1.Random)+'='+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function YGWS_mul_unit_x(x){
    var R  = get_the_Random();
var result = 0;
var judge_result = null;
if(R.Random.toString().length == 3)
{
    R.Random = R.Random.toString().substring(1);
}
var Random_Temp = Number(R.Random.toString().charAt(0)+x);
if(R.judge_num%2 == 0)
{
    var Temp_result =String(Math.pow(Random_Temp,2));
    var str_before = Temp_result.substring(-1,Temp_result.length-2);
    var str_middle = Temp_result.charAt(Temp_result.length-2);
    var str_after = Temp_result.charAt(Temp_result.length-1);
    if(str_middle == '8' || str_middle == '9')
    {
        str_middle = String(Number(str_middle)-R.error_num%2+1);
    }
    else if(str_middle == '0' || str_middle == '1')
    {
        str_middle = String(Number(str_middle)+R.error_num%2+1);
    }
    else
    {
        if(R.operation_num%2 == 0)
        {
            str_middle = String(Number(str_middle)+R.error_num%2+1);
        }
        else
        {
            str_middle = String(Number(str_middle)-R.error_num%2-1);
        }
    }
    result = Number(str_before + str_middle +str_after);
    judge_result = false;
}
else{
    result = Math.pow(Random_Temp,2);
    judge_result = true;
}
var Question = String(Random_Temp)+'^2='+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function YGWS_mul_square_x(x){
    var R  = get_the_Random();
var result = 0;
var judge_result = null;
if(R.Random.toString().length == 3)
{
    R.Random = R.Random.toString().substring(1);
}
var Random_Temp = Number(x+R.Random.toString().charAt(0));
if(R.judge_num%2 == 0)
{
    var Temp_result =String(Math.pow(Random_Temp,2));
    var str_before = Temp_result.substring(-1,Temp_result.length-2);
    var str_middle = Temp_result.charAt(Temp_result.length-2);
    var str_after = Temp_result.charAt(Temp_result.length-1);
    if(str_middle == '8' || str_middle == '9')
    {
        str_middle = String(Number(str_middle)-R.error_num%2+1);
    }
    else if(str_middle == '0' || str_middle == '1')
    {
        str_middle = String(Number(str_middle)+R.error_num%2+1);
    }
    else
    {
        if(R.operation_num%2 == 0)
        {
            str_middle = String(Number(str_middle)+R.error_num%2+1);
        }
        else
        {
            str_middle = String(Number(str_middle)-R.error_num%2-1);
        }
    }
    result = Number(str_before + str_middle +str_after);
    judge_result = false;
}
else{
    result = Math.pow(Random_Temp,2);
    judge_result = true;
}
var Question = String(Random_Temp)+'^2='+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function YGWS_mul_square_1(){
     return YGWS_mul_square_x('1');
}
function YGWS_mul_square_4(){
     return YGWS_mul_square_x('4');
}
function YGWS_mul_square_5(){
     return YGWS_mul_square_x('5');
}
function YGWS_mul_square_9(){
     return YGWS_mul_square_x('9');
}
function YGWS_mul_unit_1(){   
   return YGWS_mul_unit_x('1');
}
function YGWS_mul_unit_2(){   
   return YGWS_mul_unit_x('2');
}
function YGWS_mul_unit_3(){   
   return YGWS_mul_unit_x('3');
}
function YGWS_mul_unit_4(){   
   return YGWS_mul_unit_x('4');
}
function YGWS_mul_unit_5(){   
   return YGWS_mul_unit_x('5');
}
function YGWS_mul_unit_6(){   
   return YGWS_mul_unit_x('6');
}
function YGWS_mul_unit_7(){   
   return YGWS_mul_unit_x('7');
}
function YGWS_mul_unit_8(){   
   return YGWS_mul_unit_x('8');
}
function YGWS_mul_unit_9(){   
   return YGWS_mul_unit_x('9');
}
function YGWS_mul_double_digit(){
    var R  = get_the_Random();
var result = 0;
var judge_result = null;
if(R.Random.toString().length == 3)
{
    R.Random = R.Random.toString().substring(1);
}
if(R.judge_num%2 == 0)
{
    var Temp_result =String(Math.pow(R.Random,2));
    var str_before = Temp_result.substring(-1,Temp_result.length-2);
    var str_middle = Temp_result.charAt(Temp_result.length-2);
    var str_after = Temp_result.charAt(Temp_result.length-1);
    if(str_middle == '8' || str_middle == '9')
    {
        str_middle = String(Number(str_middle)-R.error_num%2+1);
    }
    else if(str_middle == '0' || str_middle == '1')
    {
        str_middle = String(Number(str_middle)+R.error_num%2+1);
    }
    else
    {
        if(R.operation_num%2 == 0)
        {
            str_middle = String(Number(str_middle)+R.error_num%2+1);
        }
        else
        {
            str_middle = String(Number(str_middle)-R.error_num%2-1);
        }
    }
    result = Number(str_before + str_middle +str_after);
    judge_result = false;
}
else{
    result = Math.pow(R.Random,2);
    judge_result = true;
}
var Question = String(R.Random)+'^2='+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function get_the_Random(){
    var Random = 0;
    while(Random < 0.1)
    {
        Random = Math.random();
    }
    var if_num = Math.floor(Random*1000)-Math.floor(Random*100)*10;
    var judge_num = Math.floor(Random*10000)-Math.floor(Random*1000)*10;
    var error_num = Math.floor(Random*100000)-Math.floor(Random*10000)*10;
    var operation_num = Math.floor(Random*1000000)-Math.floor(Random*100000)*10;
    var multi_num = Math.floor(Random*10000000)-Math.floor(Random*1000000)*10;
    if(if_num % 3 == 0)
    {
        Random = Math.floor((Random+1)*100);
    }
    else if(if_num % 3 == 1)
    {
        Random = Math.floor((Random+2)*100);
    }
    else                      
    {
        Random = Math.floor(Random*100);
    }
    return {
        Random        : Random,
        judge_num     : judge_num,
        error_num     : error_num,
        operation_num : operation_num,
        multi_num     : multi_num
    }
}
function YGWS_mul12(){
var R = get_the_Random();
var result = 0;
var judge_result = null;
if(R.judge_num%2 == 0)
{
    var str_before = null;
    if(R.multi_num % 8 == 0)
    {
       var Temp = (R.Random * 12).toString();
       str_before = Temp.substring(-1,Temp.length-1);
       var Temp_afer = Temp.charAt(Temp.length-1);
       var Question = String(R.Random)+"×12=";
    }
    else if(R.multi_num % 8 == 1)
    {   
       var Temp = (R.Random * 13).toString();
       str_before = Temp.substring(-1,Temp.length-1);
       var Temp_afer = Temp.charAt(Temp.length-1);
       var Question = String(R.Random)+"×13=";
    }
    else if(R.multi_num % 8 == 2)
    {  
       var Temp = (R.Random * 14).toString();
       str_before = Temp.substring(-1,Temp.length-1);
       var Temp_afer = Temp.charAt(Temp.length-1);
       var Question = String(R.Random)+"×14=";
    }
    else if(R.multi_num % 8 == 3)
    {   
       var Temp = (R.Random * 15).toString();
       str_before = Temp.substring(-1,Temp.length-1);
       var Temp_afer = Temp.charAt(Temp.length-1);
       var Question = String(R.Random)+"×15=";
    }
    else if(R.multi_num % 8 == 4)
    {  
       var Temp = (R.Random * 16).toString();
       str_before = Temp.substring(-1,Temp.length-1);
       var Temp_afer = Temp.charAt(Temp.length-1);
       var Question = String(R.Random)+"×16=";
    }
    else if(R.multi_num % 8 == 5)
    {   
       var Temp = (R.Random * 17).toString();
       str_before = Temp.substring(-1,Temp.length-1);
       var Temp_afer = Temp.charAt(Temp.length-1);
       var Question = String(R.Random)+"×17=";
    }
    else if(R.multi_num % 8 == 6)
    {  
       var Temp = (R.Random * 18).toString();
       str_before = Temp.substring(-1,Temp.length-1);
       var Temp_afer = Temp.charAt(Temp.length-1);
       var Question = String(R.Random)+"×18=";
    }
    else if(R.multi_num % 8 == 7)
    {  
       var Temp = (R.Random * 19).toString();
       str_before = Temp.substring(-1,Temp.length-1);
       var Temp_afer = Temp.charAt(Temp.length-1);
       var Question = String(R.Random)+"×19=";
    } 
    if(R.operation_num%2 == 0)
    {
        str_before = String(Number(str_before)+R.error_num%3+1);
    }
    else
    {
        str_before = String(Number(str_before)-R.error_num%3-1);
    }
    result = Number(str_before + Temp_afer);          
    Question = Question+String(result);            
    judge_result = false;
}
else{   
    judge_result = true;
    if(R.multi_num % 8 == 0)
    {
       result = R.Random * 12;
       var Question = String(R.Random)+"×12="+String(result);
    }
    else if(R.multi_num % 8 == 1)
    {  
       result = R.Random * 13;
       var Question = String(R.Random)+"×13="+String(result);
    }
    else if(R.multi_num % 8 == 2)
    {   
       result = R.Random * 14;
       var Question = String(R.Random)+"×14="+String(result);
    }
    else if(R.multi_num % 8 == 3)
    {   
       result = R.Random * 15;
       var Question = String(R.Random)+"×15="+String(result);
    }
    else if(R.multi_num % 8 == 4)
    {  
       result = R.Random * 16;
       var Question = String(R.Random)+"×16="+String(result);
    }
    else if(R.multi_num % 8 == 5)
    {  
       result = R.Random * 17;
       var Question = String(R.Random)+"×17="+String(result);
    }
    else if(R.multi_num % 8 == 6)
    {  
       result = R.Random * 18;
       var Question = String(R.Random)+"×18="+String(result);
    }
    else if(R.multi_num % 8 == 7)
    {   
       result = R.Random * 19;
       var Question = String(R.Random)+"×19="+String(result);
    }
}
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function YGWS_mul11(){
var R = get_the_Random();
var result = 0;
var judge_result = null;
if(R.Random.toString().length == 3)
{
    R.Random = R.Random.toString().substring(1);
}    
if(R.judge_num%2 == 0)
{
    var str_before = R.Random.toString().charAt(0);
    var str_middle = null;
    var str_after = R.Random.toString().charAt(R.Random.toString().length-1);
        var Temp = Number(str_before)+Number(str_after);
        if(Temp.toString().length == 2)
        {
            str_before = (Number(Temp.toString().charAt(0))+Number(str_before)).toString();
            str_middle = Temp.toString().charAt(1);

            if(str_middle == '8' || str_middle == '9')
            {
                str_middle = (Number(str_middle)-(R.error_num%2+1)).toString();
            }
            else if(str_middle == '0' || str_middle == '1')
            {
                str_middle = (Number(str_middle)+(R.error_num%2+1)).toString();
            }
            else
            {
                    if(R.operation_num%2 == 0)
                    {
                        str_middle = String(Number(str_middle)+R.error_num%2+1);
                    }
                    else
                    {
                        str_middle = String(Number(str_middle)-R.error_num%2-1);
                    }
            }
        }
        else
        {
            str_middle = Temp.toString().charAt(0);

            if(str_middle == '8' || str_middle == '9')
            {
                str_middle = (Number(str_middle)-(R.error_num%2+1)).toString();
            }
            else if(str_middle == '0' || str_middle == '1')
            {
                str_middle = (Number(str_middle)+(R.error_num%2+1)).toString();
            }
            else
            {
                    if(R.operation_num%2 == 0)
                    {
                        str_middle = String(Number(str_middle)+R.error_num%2+1);
                    }
                    else
                    {
                        str_middle = String(Number(str_middle)-R.error_num%2-1);
                    }
            }
        }
    result = Number(str_before + str_middle +str_after);
    judge_result = false;
}
else{
    result = R.Random * 11;
    judge_result = true;
}
var Question = String(R.Random)+"×11="+String(result);
var data = { 
    "Question":Question,
    "judge_result":judge_result
}
return data;
}
function proc(that,BOOL_judge,player_score,countof_player,question_data_player,YGWS,error_show_player){
        if(that.data[question_data_player].judge_result == BOOL_judge)
        {
            var Temp = that.data[player_score];
            Temp++;
            var countof_temp = String(Temp)+"/10";
            that.setData({
                [player_score] : Temp,
                [countof_player] : countof_temp
            })
            if(Temp > 10)
            {
                game_over(that);
                return;
            }
        }
        else
        {
            var Temp = that.data[player_score];
            Temp--;
            var countof_temp = String(Temp)+"/10";
            var question_data_player_Temp = YGWS_mul5();
            that.setData({
                [player_score]   : Temp,
                [countof_player] : countof_temp,
                [error_show_player]:1
            })
            if(Temp < 0)
            {
                game_over(that);
                return;
            }
            setTimeout(function(){ that.setData({
                [error_show_player]:0
            })},500)
        }
            if(YGWS == "YGWS_mul5")
            {
                var question_data_player_Temp = YGWS_mul5();
            }
            else if(YGWS == "YGWS_mul11")
            {
                var question_data_player_Temp = YGWS_mul11();
            }
            else if(YGWS == "YGWS_mul12")
            {
                var question_data_player_Temp = YGWS_mul12();
            }
            else if(YGWS == "YGWS_mul25")
            {
                var question_data_player_Temp = YGWS_mul25();
            }
            else if(YGWS == "YGWS_mul50")
            {
                var question_data_player_Temp = YGWS_mul50();
            }
            else if(YGWS == "YGWS_mul_two_decade")
            {
                var question_data_player_Temp = YGWS_mul_two_decade();
            }
            else if(YGWS == "YGWS_mul_two_decade_10")
            {
                var question_data_player_Temp = YGWS_mul_two_decade_10();
            }
            else if(YGWS == "YGWS_mul_two_decade_10_10")
            {
                var question_data_player_Temp = YGWS_mul_two_decade_10_10();
            }
            else if(YGWS == "YGWS_mul_less_100")
            {
                var question_data_player_Temp = YGWS_mul_less_100();
            }
            else if(YGWS == "YGWS_mul_more_100")
            {
                var question_data_player_Temp = YGWS_mul_more_100();
            }
            else if(YGWS == "YGWS_mul_FOIL")
            {
                var question_data_player_Temp = YGWS_mul_FOIL();
            }
            else if(YGWS == "YGWS_mul_unit_1")
            {
                var question_data_player_Temp = YGWS_mul_unit_1();
            }
            else if(YGWS == "YGWS_mul_unit_2")
            {
                var question_data_player_Temp = YGWS_mul_unit_2();
            }
            else if(YGWS == "YGWS_mul_unit_3")
            {
                var question_data_player_Temp = YGWS_mul_unit_3();
            }
            else if(YGWS == "YGWS_mul_unit_4")
            {
                var question_data_player_Temp = YGWS_mul_unit_4();
            }
            else if(YGWS == "YGWS_mul_unit_5")
            {
                var question_data_player_Temp = YGWS_mul_unit_5();
            }
            else if(YGWS == "YGWS_mul_unit_6")
            {
                var question_data_player_Temp = YGWS_mul_unit_6();
            }
            else if(YGWS == "YGWS_mul_unit_7")
            {
                var question_data_player_Temp = YGWS_mul_unit_7();
            }
            else if(YGWS == "YGWS_mul_unit_8")
            {
                var question_data_player_Temp = YGWS_mul_unit_8();
            }
            else if(YGWS == "YGWS_mul_unit_9")
            {
                var question_data_player_Temp = YGWS_mul_unit_9();
            }
            else if(YGWS == "YGWS_mul_square_1")
            {
                var question_data_player_Temp = YGWS_mul_square_1();
            }
            else if(YGWS == "YGWS_mul_square_4")
            {
                var question_data_player_Temp = YGWS_mul_square_4();
            }
            else if(YGWS == "YGWS_mul_square_5")
            {
                var question_data_player_Temp = YGWS_mul_square_5();
            }
            else if(YGWS == "YGWS_mul_square_9")
            {
                var question_data_player_Temp = YGWS_mul_square_9();
            }
            else if(YGWS == "YGWS_mul_double_digit")
            {
                var question_data_player_Temp = YGWS_mul_double_digit();
            }
            that.setData({
                [question_data_player]:question_data_player_Temp
            })
} 
function initialize(that,key){
    if(key == "YGWS_mul5")
    {
        var data_1 = YGWS_mul5();
        var data_2 = YGWS_mul5();
    }
    else if(key == "YGWS_mul11")
    {
        var data_1 = YGWS_mul11();
        var data_2 = YGWS_mul11();
    }
    else if(key == "YGWS_mul12")
    {
        var data_1 = YGWS_mul12();
        var data_2 = YGWS_mul12();
    }
    else if(key == "YGWS_mul25")
    {
        var data_1 = YGWS_mul25();
        var data_2 = YGWS_mul25();
    }
    else if(key == "YGWS_mul50")
    {
        var data_1 = YGWS_mul50();
        var data_2 = YGWS_mul50();
    }
    else if(key == "YGWS_mul_two_decade")
    {
        var data_1 = YGWS_mul_two_decade();
        var data_2 = YGWS_mul_two_decade();
    }
    else if(key == "YGWS_mul_two_decade_10")
    {
        var data_1 = YGWS_mul_two_decade_10();
        var data_2 = YGWS_mul_two_decade_10();
    }
    else if(key == "YGWS_mul_two_decade_10_10")
    {
        var data_1 = YGWS_mul_two_decade_10_10();
        var data_2 = YGWS_mul_two_decade_10_10();
    }
    else if(key == "YGWS_mul_less_100")
    {
        var data_1 = YGWS_mul_less_100();
        var data_2 = YGWS_mul_less_100();
    }
    else if(key == "YGWS_mul_more_100")
    {
        var data_1 = YGWS_mul_more_100();
        var data_2 = YGWS_mul_more_100();
    }
    else if(key == "YGWS_mul_FOIL")
    {
        var data_1 = YGWS_mul_FOIL();
        var data_2 = YGWS_mul_FOIL();
    }
    else if(key == "YGWS_mul_unit_1")
    {
        var data_1 = YGWS_mul_unit_1();
        var data_2 = YGWS_mul_unit_1();
    }
    else if(key == "YGWS_mul_unit_2")
    {
        var data_1 = YGWS_mul_unit_2();
        var data_2 = YGWS_mul_unit_2();
    }
    else if(key == "YGWS_mul_unit_3")
    {
        var data_1 = YGWS_mul_unit_3();
        var data_2 = YGWS_mul_unit_3();
    }
    else if(key == "YGWS_mul_unit_4")
    {
        var data_1 = YGWS_mul_unit_4();
        var data_2 = YGWS_mul_unit_4();
    }
    else if(key == "YGWS_mul_unit_5")
    {
        var data_1 = YGWS_mul_unit_5();
        var data_2 = YGWS_mul_unit_5();
    }
    else if(key == "YGWS_mul_unit_6")
    {
        var data_1 = YGWS_mul_unit_6();
        var data_2 = YGWS_mul_unit_6();
    }
    else if(key == "YGWS_mul_unit_7")
    {
        var data_1 = YGWS_mul_unit_7();
        var data_2 = YGWS_mul_unit_7();
    }
    else if(key == "YGWS_mul_unit_8")
    {
        var data_1 = YGWS_mul_unit_8();
        var data_2 = YGWS_mul_unit_8();
    }
    else if(key == "YGWS_mul_unit_9")
    {
        var data_1 = YGWS_mul_unit_9();
        var data_2 = YGWS_mul_unit_9();
    }
    else if(key == "YGWS_mul_square_1")
    {
        var data_1 = YGWS_mul_square_1();
        var data_2 = YGWS_mul_square_1();
    }
    else if(key == "YGWS_mul_square_4")
    {
        var data_1 = YGWS_mul_square_4();
        var data_2 = YGWS_mul_square_4();
    }
    else if(key == "YGWS_mul_square_5")
    {
        var data_1 = YGWS_mul_square_5();
        var data_2 = YGWS_mul_square_5();
    }
    else if(key == "YGWS_mul_square_9")
    {
        var data_1 = YGWS_mul_square_9();
        var data_2 = YGWS_mul_square_9();
    }
    else if(key == "YGWS_mul_double_digit")
    {
        var data_1 = YGWS_mul_double_digit();
        var data_2 = YGWS_mul_double_digit();
    }
        that.setData({
          question_data_player_1 : data_1,
          question_data_player_2 : data_2
    })

}
module.exports = {
	YGWS_mul5: YGWS_mul5,
    YGWS_mul11:YGWS_mul11,
    YGWS_mul12:YGWS_mul12,
    YGWS_mul25:YGWS_mul25,
    YGWS_mul50:YGWS_mul50,
    YGWS_mul_two_decade:YGWS_mul_two_decade,
    YGWS_mul_two_decade_10:YGWS_mul_two_decade_10,
    YGWS_mul_two_decade_10_10:YGWS_mul_two_decade_10_10,
    YGWS_mul_less_100:YGWS_mul_less_100,
    YGWS_mul_more_100:YGWS_mul_more_100,
    YGWS_mul_FOIL:YGWS_mul_FOIL,
    YGWS_mul_unit_1:YGWS_mul_unit_1,
    YGWS_mul_square_1:YGWS_mul_square_1,
    YGWS_mul_square_4:YGWS_mul_square_4,
    YGWS_mul_square_5:YGWS_mul_square_5,
    YGWS_mul_square_9:YGWS_mul_square_9,
    YGWS_mul_double_digit:YGWS_mul_double_digit,
    proc:proc,
    time_ctrl:time_ctrl,
    clear_time_out:clear_time_out,
    game_over:game_over,
    initialize:initialize
}