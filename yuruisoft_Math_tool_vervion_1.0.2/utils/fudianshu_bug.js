function add(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}
function sub(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) - mul(b, e)) / e;
}
function mul(a, b) { 
    var c = 0,
        d = a.toString(),
        e = b.toString(),
        f = 0,
        g = 0;
    if(d.indexOf('e') != -1)
    {
        try{
            if(d.indexOf('.') != -1)
            {
               c +=d.split("e")[0].split(".")[1].length;
            } 
            else
            {
                c+=0;
            }            
             f = Number(d.split("e")[1]);
             d = d.split("e")[0];
        }catch (f) {}
    }
    else
    {
        try {
                c += d.split(".")[1].length;
            } catch (f) {}
    }
    if(e.indexOf('e') != -1)
    {
        try{
            if(e.indexOf('.') != -1)
            {
                c +=e.split("e")[0].split(".")[1].length;
            }
            else
            {
                c+=0;
            }
             g = Number(e.split("e")[1]); 
             e = e.split("e")[0]; 
        }catch (f) {}
    }
    else
    {
        try {
                c += e.split(".")[1].length;
            } catch (f) {}
    }
    var fengmu = Math.pow(10,c-f-g);
     if(fengmu.toString().indexOf('e') != -1)
     {
        var fengzi = Number(d.replace(".", "")) * Number(e.replace(".", ""));    
        var fengzi_weishu = fengzi.toString().length
        var fengmu_weishu = Number(fengmu.toString().split('e')[1]);
        if (fengmu_weishu > 0)
        {
            if(fengmu_weishu >= fengzi_weishu)
            {
                var before_strs ="0."
                for( var n = 0 ; n <(fengmu_weishu - fengzi_weishu) ;n++ )
                   before_strs = before_strs+"0";
                return Number(before_strs+fengzi.toString())
            }
            else
            {
                var strs_fengzi = fengzi.toString();
                var after_strs =null;
                for(var nu = 0 ; nu < fengmu_weishu ; nu++)
                {
                    if(after_strs !=null){
                        after_strs = strs_fengzi.substring(strs_fengzi.length-1) + after_strs;
                        strs_fengzi = strs_fengzi.substring(-1,strs_fengzi.length-1);
                    }
                    else
                    {
                        after_strs = strs_fengzi.substring(strs_fengzi.length-1);
                        strs_fengzi = strs_fengzi.substring(-1,strs_fengzi.length-1); 
                    }
                        
                } 
                return Number(strs_fengzi+"."+after_strs);
            }
        }
        else if(fengmu_weishu<0)
        {
            var fengzi_string = fengzi.toString();
            for(var na = 0 ; na < Math.abs(fengmu_weishu) ; na++)
              fengzi_string =fengzi_string +"0"
              return Number(fengzi_string);
        }
     }
    else
       return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10,c-f-g) ;
}
function div(a, b) {
    var c, d, e = 0,
        f = 0;
    try {
        e = a.toString().split(".")[1].length;
    } catch (g) {}
    try {
        f = b.toString().split(".")[1].length;
    } catch (g) {}
    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), mul(c / d, Math.pow(10, f - e));
}
function math_dms(value) {              
                var v1 = Math.floor(value);
                var v2 = Math.floor((value - v1) * 60);                              
                var v3 = mul(sub(mul(sub(value,v1),60),v2),60);
                return add(add(v1,mul(v2,0.01)),mul(v3,0.0001));  
}
function math_F_E(num) {
    var p = Math.floor(Math.log(num)/Math.LN10);
    var n = mul(num,Math.pow(10, -p));
    if(p>=0)
    return n + 'e' + '+'+p;
    return n + 'e' +p;
}
function convertNUM(beforeCountTest)
{  
   if(beforeCountTest.indexOf('e') != -1)  
     return mul(Number(beforeCountTest.substring(0,beforeCountTest.indexOf('e'))),Math.pow(10,Number(beforeCountTest.substring(beforeCountTest.indexOf('e')+1,beforeCountTest.length))));   
}
function math_convert_du(value){
      return value*2*Math.PI/360
}
function fact(n)
 {
    if (n == 0)
    {
        return 1;
    }
    else
    {
        return n * fact(n - 1);
    }
}
function reciproc(value)
{
    return div(1,value);
}
function cuberoot(n)
{
    var x0,x1;
    x0 = n;
    x1 = (2*x0/3)+(n/(3*x0*x0)); 
    while(Math.abs(sub(x1,x0))>0.000001)
    {
        x0 = x1;
        x1 = (2*x0/3)+(n/(3*x0*x0)); 
    }
    return x1;
}
function set_null(that){
      that.data.changdu_data[0].input_data = null;
      that.data.changdu_data[1].input_data = null;
      that.data.changdu_data[2].input_data = null;
      that.data.changdu_data[3].input_data = null;
      that.data.changdu_data[4].input_data = null;
      that.data.changdu_data[5].input_data = null;
      that.data.changdu_data[6].input_data = null;
      that.data.changdu_data[7].input_data = null;
      that.data.changdu_data[8].input_data = null;
      that.data.changdu_data[9].input_data = null;
      that.data.changdu_data[10].input_data = null;
      that.data.changdu_data[11].input_data = null;
      that.data.changdu_data[12].input_data = null;
}
function set_null_quyu(that){
      that.data._data[0].input_data = null;
      that.data._data[1].input_data = null;
      that.data._data[2].input_data = null;
      that.data._data[3].input_data = null;
      that.data._data[4].input_data = null;
      that.data._data[5].input_data = null;
      that.data._data[6].input_data = null;
      that.data._data[7].input_data = null;
      that.data._data[8].input_data = null;
      that.data._data[9].input_data = null;
}
function set_null_liang(that){
      that.data._data[0].input_data = null;
      that.data._data[1].input_data = null;
      that.data._data[2].input_data = null;
      that.data._data[3].input_data = null;
      that.data._data[4].input_data = null;
      that.data._data[5].input_data = null;
      that.data._data[6].input_data = null;
}
function set_null_zhongliang(that){
      that.data._data[0].input_data = null;
      that.data._data[1].input_data = null;
      that.data._data[2].input_data = null;
      that.data._data[3].input_data = null;
      that.data._data[4].input_data = null;
      that.data._data[5].input_data = null;
      that.data._data[6].input_data = null;
      that.data._data[7].input_data = null;
      that.data._data[8].input_data = null;
      that.data._data[9].input_data = null;
}
function set_null_(that,count_){
    for(var i = 0 ; i< count_ ; i++)
    {
        that.data._data[i].input_data = null;
    }
}
function set_value(that,options,num){
if(options.detail.value == "")
    set_null(that);
else{
        if(options.detail.value.toString()[options.detail.value.toString().length-1] =='.')
            return;          
        if(num == 1) 
            var a = 1000000;
        else if(num == 2) 
        var a = 1000000000;
        else if(num == 3) 
        var  a = 10000;
        else if(num == 4) 
        var a = 1000;
        else if(num == 5) 
        var a = 1;
        else if(num == 6)
        var  a = 0.001;
        else if(num == 13)
        var a = 0.0001;
        that.data.changdu_data[0].input_data = mul(options.detail.value,mul(0.000001,a));
        that.data.changdu_data[1].input_data = mul(options.detail.value,mul(1e-9,a));
        that.data.changdu_data[2].input_data = mul(options.detail.value,mul(0.0001,a));
        that.data.changdu_data[3].input_data = mul(options.detail.value,mul(0.001,a));
        that.data.changdu_data[4].input_data = mul(options.detail.value,a);
        that.data.changdu_data[5].input_data = mul(options.detail.value,mul(1000,a));
        that.data.changdu_data[6].input_data = mul(options.detail.value,mul(3.93701e-5,a));
        that.data.changdu_data[7].input_data = mul(options.detail.value,mul(3.28084e-6,a));
        that.data.changdu_data[8].input_data = mul(options.detail.value,mul(1.09361e-6,a));
        that.data.changdu_data[9].input_data = mul(options.detail.value,mul(6.21371e-10,a));
        that.data.changdu_data[10].input_data = mul(options.detail.value,mul(5.39957e-10,a));
        that.data.changdu_data[11].input_data = mul(options.detail.value,mul(1.057e-22,a));
        that.data.changdu_data[12].input_data = mul(options.detail.value,mul(10000,a));
  }
      that.setData({
        changdu_data : that.data.changdu_data
    })
}
module.exports = {
	add: add,
	sub: sub,
	mul: mul,
	div: div,
    math_dms: math_dms,
    math_F_E:math_F_E,
    convertNUM:convertNUM,
    math_convert_du:math_convert_du,
    fact:fact,
    reciproc:reciproc,
    cuberoot:cuberoot,
    set_null:set_null,
    set_value:set_value,
    set_null_quyu:set_null_quyu,
    set_null_liang:set_null_liang,
    set_null_zhongliang:set_null_zhongliang,
    set_null_:set_null_
}