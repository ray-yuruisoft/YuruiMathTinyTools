var rpn = require('fudianshu_bug.js')
function calCommonExp(exp,choose_du) {
	var rpnArr = outputRpn(exp);
	if(rpnArr == null)
		return;
		return calRpnExp(rpnArr,choose_du)
}
function isOperator(value) {                                  
	var operatorString = '+-*/()×÷^%#Mod#sin#cos#ln#tan#Int#dms#log#fact#reciproc#cuberoot#powten#sqrt#sqr#cube#asin#acos#atan#powe#sinh#cosh#tanh#asinh#acosh#atanh#frac#@#'; 
	var n = operatorString.indexOf(value);
	if(n>-1 && iszimu(value) && (jieduanfa_test(value,operatorString) == 0))
		return
	return operatorString.indexOf(value) > -1;
}
function jieduanfa_test(key_string,strings)
{
	if(strings.indexOf(key_string) != -1)
	{
		if(strings[strings.indexOf(key_string)-1] == "#" && strings[strings.indexOf(key_string)+key_string.length] == "#")
	    	return 1+jieduanfa_test(key_string,strings.substring(strings.indexOf(key_string)+key_string.length));
		else
			return 0+jieduanfa_test(key_string,strings.substring(strings.indexOf(key_string)+key_string.length));
	}	
	else 
		return 0;  
}
function danmu_judge(value)
{	
	var reg = /^[0-9]+$/
	var danmu = "#sin#cos#ln#tan#Int#dms#log#fact#reciproc#cuberoot#powten#sqrt#sqr#cube#asin#acos#atan#powe#sinh#cosh#tanh#asinh#acosh#atanh#frac#@#";
	for(var i = 0 , max = value.length ; i<max ; i++)
	{  
		if(iszimu(value[i]) && jieduanfa_test(value[i],danmu))
		{
			if((i!=0) && reg.test(value[i-1]))
			{
				return
			}
		}
	}	
	return true
}
function outputRpn(exp) {
      var reg_group = exp.match(/([0-9.]+e\+[0-9]+)|([0-9.]+e\-[0-9]+)|([0-9.]+e[0-9]+)/g);
      if(reg_group !=null)
      {            
		exp = exp.replace(/([0-9.]+e\+[0-9]+)|([0-9.]+e\-[0-9]+)|([0-9.]+e[0-9]+)/g,'@');				
      }
	var inputStack = [];
	var outputStack = [];
	var outputQueue = [];
	var firstIsOperator = false;
	exp.replace(/\s/g,'');
	for(var i = 0, max = exp.length; i < max; i++) {
			if(!isOperator(exp[i]) && !isOperator(exp[i-1]) && (i != 0) && !iszimu(exp[i]) && !iszimu(exp[i-1])) {
				inputStack[inputStack.length-1] = inputStack[inputStack.length-1] + exp[i]+'';
			}
			else if(iszimu(exp[i-1]) && (i != 0) && iszimu(exp[i]))
				{
						inputStack[inputStack.length-1] = inputStack[inputStack.length-1] + exp[i]+'';
				}
			else
				inputStack.push(exp[i]);
		}
	var judge_first_Operator = "+*/)×÷^%";
	if(judge_first_Operator.indexOf(inputStack[0]) != -1)
		return;
	if(inputStack[0] == '(')
	{
		if(judge_first_Operator.indexOf(inputStack[1]) != -1)
			return;
	}
	if(inputStack[0] == '-')
		firstIsOperator =true;
	for(var n = 0, max_n = inputStack.length ; n < max_n ;n++)
	{
		if(!isOperator(inputStack[n]) && isNaN(inputStack[n]))
			return;
	}
	if(!danmu_judge(inputStack)) 
		return;	
	if(firstIsOperator && !isNaN(inputStack[1])) {
			inputStack.shift();
			inputStack[0] = -inputStack[0] ;
	}
if(reg_group !=null && reg_group.length > 0)
{
		for( var kk = 0 , Temp = 0; kk < inputStack.length ; kk++)
		{	
		if(inputStack[kk] == '@')
		{			  
			inputStack[kk] = inputStack[kk].replace(/[@]/,reg_group[Temp])
			Temp++;
		}		
		}
}
	while(inputStack.length > 0) {
		var cur = inputStack.shift();
		if(isOperator(cur)) {
			if (cur == '(') { 
				outputStack.push(cur);
			} else if (cur == ')') {
				var po = outputStack.pop();
				while(po != '(' && outputStack.length > 0) {
					outputQueue.push(po);
					po = outputStack.pop();
				}
			} else {
				while(prioraty(cur,outputStack[outputStack.length - 1]) && outputStack.length > 0) {
					outputQueue.push(outputStack.pop());
				}
				outputStack.push(cur)
			}
		} else {
			outputQueue.push(Number(cur));
		}
	}
	if(outputStack.length > 0){
		while (outputStack.length > 0) {
			outputQueue.push(outputStack.pop());
		}
	}
	while(outputQueue.length > 0)
	{
		while(outputQueue.length >0){
			if(outputQueue[0] == "(")
			   outputQueue.shift();
			else
			   outputStack.push(outputQueue.shift());
		}
	}
	return outputStack;
}

function getLastNumberStr_fixed(exp) 
{  
	var str = [];
	exp.replace(/\s/g,'');
	for(var i = 0, max = exp.length; i < max; i++) {
			if(!isOperator(exp[i]) && !isOperator(exp[i-1]) && (i != 0) && !iszimu(exp[i]) && !iszimu(exp[i-1])) {
				str[str.length-1] = str[str.length-1] + exp[i]+'';
			}
			else if(iszimu(exp[i-1]) && (i != 0) && iszimu(exp[i]))
				{
						str[str.length-1] = str[str.length-1] + exp[i]+'';
				}
			else
				str.push(exp[i]);
		}

	var outputQueue_fixed = [];
	var stack_str = null;
	for(var i = 0 ,max_fixed = str.length; i < max_fixed; i++)
	{
		if(str[i] == ')')
		{
			outputQueue_fixed.push(str[i]);
			while(outputQueue_fixed[outputQueue_fixed.length-1] != '(')
			{
				if(stack_str == null)
				   stack_str = outputQueue_fixed.pop()
				else
				  stack_str = outputQueue_fixed.pop() +stack_str;
			}
			stack_str = '('+stack_str;
			outputQueue_fixed[outputQueue_fixed.length-1] = stack_str;
			stack_str = null;
		}
		else
		{
		  outputQueue_fixed.push(str[i]);
		}
	}
	return outputQueue_fixed[outputQueue_fixed.length-1];
}
function iszimu(value)
{
	var reg= /^[A-Za-z]+$/;
	if(typeof(value) == "string")
	{
		for(var i = 0, max = value.length; i < max; i++)
		{
			if(!reg.test(value[i]))
				return;
		}
		return true;
	}
	return reg.test(value);
}
function getPrioraty(value) {
	if(value == '-' || value == '+') {
		return 1;
	} else if(value == '*' || value == '/' || value == '×' || value == '÷' || value == '^' || value == 'Mod' || value == '%') {
		return 2;
	} else if(value == 'sin' || value =='cos' || value =='ln' || value =='tan' || value =='Int' || value == 'dms' ||value =='log'||value =='fact' || value =='reciproc' || value =='cuberoot' || value =='powten' || value =='sqrt' || value == 'sqr' || value =='cube'||value == 'asin'||value == 'acos'||value =='atan'|| value =='powe'|| value =='sinh'||value =='cosh'||value =='tanh'||value =='asinh'||value =='acosh'||value =='atanh'||value =='frac'){
		return 4;
	}else{
		return 0;
	}
}
function prioraty(v1, v2) {
	return getPrioraty(v1) <= getPrioraty(v2);
}
function calRpnExp(rpnArr,choose_du) {
	var stack = [];
	for(var i = 0, max = rpnArr.length; i < max; i++) {
		if(!isOperator(rpnArr[i])) {
			stack.push(rpnArr[i]);
		}
		else if(rpnArr[i] == 'powe') 
		{
			var num1 = stack.pop();
			var num = Math.pow(Math.E,num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'sin')
		{			
			var num1 = stack.pop();

			if(choose_du == 0)
			{
				var n = num1/180;
				if( n == Math.floor(n))
				{
					num1 = 0;
				}
				num1 = rpn.div(rpn.mul(num1,Math.PI),180);
			}
			else if(choose_du == 2)
			{
				var n = num1/200;
				if( n == Math.floor(n))
				{
					num1 = 0;
				}			
				num1 = rpn.div(rpn.mul(num1,Math.PI),200);			
			}

			var num = Math.sin(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'sinh')
		{			
			var num1 = stack.pop();			
			var num = rpn.mul(rpn.sub(Math.pow(Math.E,num1),Math.pow(Math.E,rpn.mul(-1,num1))),0.5)
			stack.push(num);
		}
		else if(rpnArr[i] == 'cosh')
		{			
			var num1 = stack.pop();			
			var num = rpn.mul(rpn.add(Math.pow(Math.E,num1),Math.pow(Math.E,rpn.mul(-1,num1))),0.5)
			stack.push(num);
		}
		else if(rpnArr[i] == 'tanh')
		{			
			var num1 = stack.pop();			
			var num = rpn.div(rpn.sub(Math.pow(Math.E,num1),Math.pow(Math.E,rpn.mul(-1,num1))),rpn.add(Math.pow(Math.E,num1),Math.pow(Math.E,rpn.mul(-1,num1))))
			stack.push(num);
		}
		else if(rpnArr[i] == 'asinh')
		{			
			var num1 = stack.pop();			
			var num = Math.log(rpn.add(num1,Math.sqrt(rpn.add(Math.pow(num1,2),1))));
			stack.push(num);
		}
		else if(rpnArr[i] == 'acosh')
		{			
			var num1 = stack.pop();			
			var num = Math.log(rpn.add(num1,Math.sqrt(rpn.sub(Math.pow(num1,2),1))));
			stack.push(num);
		}
		else if(rpnArr[i] == 'atanh')
		{			
			var num1 = stack.pop();			
			var num = rpn.mul(Math.log(rpn.div(rpn.add(1,num1),rpn.sub(1,num1))),0.5);
			stack.push(num);
		}
		else if(rpnArr[i] == 'asin')
		{			
			var num1 = stack.pop();
			if(choose_du == 0)
			{
				num1 = rpn.div(rpn.mul(num1,Math.PI),180);
			}
			else if(choose_du == 2)
			{		
				num1 = rpn.div(rpn.mul(num1,Math.PI),200);		
			}
			var num = Math.asin(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'acos')
		{			
			var num1 = stack.pop();
			if(choose_du == 0)
			{
				num1 = rpn.div(rpn.mul(num1,Math.PI),180);
			}
			else if(choose_du == 2)
			{		
				num1 = rpn.div(rpn.mul(num1,Math.PI),200);			
			}
			var num = Math.acos(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'atan')
		{			
			var num1 = stack.pop();
			if(choose_du == 0)
			{
				num1 = rpn.div(rpn.mul(num1,Math.PI),180);
			}
			else if(choose_du == 2)
			{		
				num1 = rpn.div(rpn.mul(num1,Math.PI),200);	
			}
			var num = Math.atan(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'cos')
		{
			var num1 = stack.pop();
			if(choose_du == 0)
			{
				var n = num1/90;
				if((n%2 == 1) && (n ==Math.floor(n)))
				{
					var num2 = 0;
				}
				else
				  num1 = rpn.div(rpn.mul(num1,Math.PI),180);
			}
			else if(choose_du == 2)
			{
				var n = num1/100;
				if((n%2 == 1) && (n ==Math.floor(n)))
				{
					var num2 = 0;
				}
				else			
					num1 = rpn.div(rpn.mul(num1,Math.PI),200);				
			}
           if(num2 == 0)
		   		var num = 0;
		   else
			    var num = Math.cos(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'tan')
		{
			var num1 = stack.pop();
			if(choose_du == 0)
			{
				var n = num1/180;
				if( n == Math.floor(n))
				{
					num1 = 0;
				}
				num1 = rpn.div(rpn.mul(num1,Math.PI),180);
			}
			else if(choose_du == 2)
			{
				var n = num1/200;
				if( n == Math.floor(n))
				{
					num1 = 0;
				}			
				num1 = rpn.div(rpn.mul(num1,Math.PI),200);			
			}
			var num = Math.tan(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'ln')
		{
			var num1 = stack.pop();
			var num = Math.log(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'Int')
		{
			var num1 = stack.pop();
			var num = Math.floor(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'frac')
		{
			var num1 = stack.pop();
			var num = rpn.sub(num1,Math.floor(num1));
			stack.push(num);
		}
		else if(rpnArr[i] == 'dms')
		{
			var num1 = stack.pop();
			var num = rpn.math_dms(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'log')
		{
			var num1 = stack.pop();
			var num = rpn.div(Math.log(num1),Math.LN10);
			stack.push(num);
		}
		else if(rpnArr[i] == 'fact')
		{
			var num1 = stack.pop();
			var num = rpn.fact(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'reciproc')
		{
			var num1 = stack.pop();
			var num = rpn.reciproc(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'cuberoot')
		{			
			var num1 = stack.pop();
			var num = rpn.cuberoot(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'powten')
		{			
			var num1 = stack.pop();
			var num = Math.pow(10,num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'sqrt')
		{			
			var num1 = stack.pop();
			var num = Math.sqrt(num1);
			stack.push(num);
		}
		else if(rpnArr[i] == 'sqr')
		{		
			var num1 = stack.pop();
			var num = Math.pow(num1,2);
			stack.push(num);
		}
		else if(rpnArr[i] == 'cube')
		{			
			var num1 = stack.pop();
			var num = Math.pow(num1,3);
			stack.push(num);
		}
		else{
			if(stack.length < 2)
			{
				return;
			}
			var num1 = stack.pop();
			var num2 = stack.pop();
			if(rpnArr[i] == '-') {
				var num =rpn.sub(num2,num1);
			} else if(rpnArr[i] == '+') {
				var num = rpn.add(num2,num1);
			} else if(rpnArr[i] == '*' || rpnArr[i] == '×') {
				var num = rpn.mul(num2,num1);
			} else if(rpnArr[i] == '/' || rpnArr[i] == '÷') {
				var num = rpn.div(num2,num1);
			}else if(rpnArr[i] == 'Mod') {
				var num = num2%num1;
			}else if(rpnArr[i] == '%') {
				var num = num2%num1;
			}else if(rpnArr[i] == '^') {
				var num = Math.pow(num2,num1);
			}
			stack.push(num);
		}
	}
	return stack[0];
}
module.exports = {
	calCommonExp: calCommonExp,
	getLastNumberStr_fixed:getLastNumberStr_fixed
}