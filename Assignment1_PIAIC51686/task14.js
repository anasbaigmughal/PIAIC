var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write("a is: " + a);
document.write("<br />b is: " + b);
document.write("<br />result is: " + result);
document.write("<br /><br />");

document.write("<br />--a //pre decrements 'a' hence value of a is 1 now"); 
document.write("<br />--a - --b //evaluates pre decrement 'b' and then evaluate it with last value of 'a' hence expression is 1 - 0 = 1");
document.write("<br />--a - --b + ++b //pre increments 'b' and then evaluate it with value of last expression hence expression is 1 - 0 + 1 = 2"); 
document.write("<br />--a - --b + ++b + b-- //post decrements 'b' (value update after assignment) and evaluates it with value of last expression hence expression is 1 - 0 + 1 + 1 = 3");