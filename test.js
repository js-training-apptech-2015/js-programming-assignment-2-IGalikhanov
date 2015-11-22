function test(ok, msg) {
    if(ok !== true){
        console.log(msg);
 	}	
}	

test(solution1([5,4,1,-4, -1,7,9,10]) === 2, 'error1');
test(solution1([1,5,4,2]) === 3, 'error2');
test(solution1([3,5,6,2]) === 1, 'error3');
test(solution1([-3,-5,-4,-2]) === 1, 'error4');
test(solution2('[][][') === false, 'error5');
test(solution2('[]') === true, 'error6');
test(solution2('[()]') === true, 'error7');
test(solution2('[](){}') === true, 'error8');
test(solution2('][') === false, 'error9');
test(solution2('[(])') === false, 'error10');
