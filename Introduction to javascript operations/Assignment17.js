/*Q1.Explain the role of operators in JavaScript.Why are they essential in programming ?
    Operators play a crucial role in JavaScript.They help us manipulate data, perform calculations, and make decisions based on conditions.There are different types of operators in JavaScript, each with its own purpose and use case.

Q2.Describe the categorization of operators in JavaScript based on their functionality.Provide examples for
each category.
Types of JavaScript Operators
There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators

Arithmetic Operators are used to perform arithmetic on numbers:

Arithmetic Operators Example
let a = 3;
let x = (100 + 50) * a;

Assignment operators assign values to JavaScript variables.

The Addition Assignment Operator(+=) adds a value to a variable.

    Assignment
let x = 10;
x += 5;


 comparison Operator
    == equal to
        === equal value and equal type
            != not equal
                !== not equal value or not equal type
                    > greater than
                        < less than
                            >= greater than or equal to
                                <= less than or equal to
                                    ? ternary operator

JavaScript String Operators are used to manipulate and perform operations on strings.There are two operators which are used to modify strings in JavaScript.These operators help us to join one string to another string.

Type of JavaScript String Operators
Concatenate Operator
Concatenate Assignment Operator
let str1 = "baba";
let str2 = "babu";
let result = (str1 + str2);
console.log(result);


JavaScript Logical Operators
Operator	Description
    && logical and
        || logical or
!logical not


JavaScript Bitwise Operators
Bit operators work on 32 bits numbers.

Any numeric operand in the operation is converted into a 32 bit number.The result is converted back to a JavaScript number.
Operator	Description	Example	Same as Result	Decimal
    & AND	5 & 1	0101 & 0001	0001	 1
        | OR	5 | 1	0101 | 0001	0101	 5
~NOT	~5	 ~0101	1010	 10
    ^ XOR	5 ^ 1	0101 ^ 0001	0100	 4
        << left shift	5 << 1	0101 << 1	1010	 10
            >> right shift	5 >> 1	0101 >> 1	0010	  2
                >>> unsigned right shift	5 >>> 1	0101 >>> 1	0010	  2


he conditional(ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark(?), then an expression to execute if the condition is truthy followed by a colon(: ), and finally the expression to execute if the condition is falsy.This operator is frequently used as an alternative to an if...else statement.


Q3. Differentiate between unary, binary, and ternary operators in JavaScript. Give examples of each.
ANS:The three categories of operators based on the number of operands they require are:

Unary operators: which require one operand (Un)
let x = 5;

x++; // Increment x by 1, now x is 6

x--; // Decrement x by 1, now x is 5 again
Binary operators: which require two operands (Bi)
let sum = 3 + 4; // sum is 7

Ternary operators: which require three operands (Ter)
result = condition ? trueValue : falseValue;


Q4. Discuss the precedence and associativity of operators in JavaScript. Why is understanding these concepts
important?
Ans: Operator precedence describes the order in which operations are performed in an arithmetic expression.

Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

why it is important:
Understanding operator precedence is essential as it ensures accurate evaluation of expressions.

Technically, insufficient knowledge of the rules can lead to unexpected outcomes, introducing logical errors in the code.


/* Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest =
(principal * rate * time) / 100./* 
Ans:
let p = 1200;
let n = 5;
let r = 0.2;

const simpleInterest = (p * n * r) / 100;

console.log(`Simple Interest: ${simpleInterest}`);

/* Q(6) write a javascript program to calculate the Body Mass index (BMI)using the formula BMI= weight(kg)\height*height./* 
let weight = 200;
let height=112;

const BMI= (height * height) / weight;
console.log(BMI);


/* Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate
arithmetic operators.*/

const pi = math.PI;
const r =4
const areaofcircle= (pi*r*r);
console.log(areaofcircle);





