function solution1(A) {
	var a1 = [];
	for(var i = 0; i < A.length; i++) {
        if(A[i] >= 0) {
		   a1[A[i]] = A[i];
		}   
	}

	for(var i = 1; i < a1.length; i++) {
        if(typeof(a1[i]) == "undefined") {
		    return i;
        }   		
	}
    return 1;	
}

function solution2(S) {
	var a1 = [];
	for(var i = 0; i < S.length; i++) {
        if((i != S.length-1 ) && (S[i] == '(' || S[i] == '[' || S[i] == '{')) {
			a1.push(S[i]);
		}	
        else if	(S[i] == ')')  {
			if(a1.pop() != "(") return false; 
		}
        else if	(S[i] == ']')  {
			if(a1.pop() != "[") return false; 
		}
		else if	(S[i] == '}')  {
			if(a1.pop() != "{") return false; 
		}
		else return false;
	}
	
	return true;
}

function solution3(A, F) {
   var parm = /^(.*)=>/.exec(F)[1];
   if (parm.indexOf("(") == -1) {
      parm = "(" + parm + ")";
   }
   var expression = /.*=>\s*(.*)$/.exec(F)[1];
   var mapper = eval("(function" + parm + " { return " + expression + "})");
   return A.map(mapper);
}

function test(ok, msg) {
    if(ok !== true){
        console.log(msg);
 	}	
}	
 
var a1 = solution3([1,2,3], (a)=>a*2);
alert(a1.toString());
