function time_change(time_data){
  var times,temp;
  var t_year ,t_month;
  var months = [];
      months[0] = 31;
      months[1] = 28;
      months[2] = 31;
      months[3] = 30;
      months[4] = 31;
      months[5] = 30;
      months[6] = 31;
      months[7] = 31;
      months[8] = 30;
      months[9] = 31;
      months[10] = 31;
      months[11] = 31;
      times = time_data+ 28800;
      t_year = 1970; 
      t_month = 0; 
    for(;;) 
    { 
        temp = times; 
        if(((t_year % 4 == 0) && (t_year % 100 != 0)) || (t_year % 400 ==0)) 
            times = times - 31622400;    
        else 
            times = times - 31536000; 
        if(times < 0) 
        { 
            times = temp; 
            break; 
        } 
        t_year++;   
    } 
    if(((t_year % 4 == 0) && (t_year % 100 != 0)) || (t_year % 400 ==0))
        months[1] = 29; 
    else 
        months[1] = 28; 
    for(;;) 
    { 
        temp = times; 
        times = times - months[t_month] * 86400; 
        if(times < 0) 
        { 
            times = temp; 
            break; 
        } 
        t_month++; 
    } 
    var year = t_year;
    var month = t_month + 1; 
    var day =    Math.floor(times / 86400 + 1) ; 
    var hour =   Math.floor((times % 86400) / 3600);
    var minute = Math.floor((times % 3600) / 60) ;
    var second = Math.floor(times % 60);
    var time_return = {
        year : year,
        month:month,
        day:day,
        hour:hour,
        minute:minute,
        second:second
    }
    return time_return;
}
function clear_all_data(that){
    var temp = that.data.fileList_Data;
    that.setData({
    fileList_Data : []
  })
    for(var i =0 ; i < temp.length ; i++)
    {
        wx.removeSavedFile({
        filePath: temp[i].filePath,
        success: function(res){
        },
        fail: function(res) {
            // fail
        },
        complete: function(res) {
            // complete
        }
        })
    }
}
function delete_data(that,storage_data){
  var temp = that.data.delete_list;
  var input = that.data.fileList_Data;
  var output = [];
  var count = input.length;
  for( var j = 0 ; j < temp.length ; j++)
  {
        while(input.length != 0)
        {
          if(temp[j] == input[0].filePath)
          {
              input.shift();
          }
          else
          {
              output.push(input.shift());
          }
        }
      input = output;
      output = [];
  }
  that.setData({
    fileList_Data : input,
    checked_set:false
  })
  var storage_data_temp = [];
  for(var i =0 ; i < temp.length ; i++) 
  {
    wx.removeSavedFile({
      filePath: temp[i],
      success: function(res){
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
    while(storage_data.length!=0)
    {
        var temp_data = storage_data.shift();
        if( temp_data.savedFilePath != temp[i])
        {
            storage_data_temp.push(temp_data);
        }
    }
    storage_data = storage_data_temp;
    storage_data_temp = [];
  }
    wx.setStorage({
      key: 'colected_data',
      data: storage_data,
      success: function(res){
        getApp().globalData.user_storage_data = storage_data;
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
}
module.exports = {
    time_change:time_change,
    delete_data:delete_data,
    clear_all_data:clear_all_data
}

