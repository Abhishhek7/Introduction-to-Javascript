/*Question 1: Explain what JavaScript is and its role in web development.
Ans: JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.
->> Uses
JavaScript is used in every industry to create all types of applications.  its uses in web development, mobile development, game development, and more. Front-end developers use JavaScript (along with HTML and CSS) to create the parts of a web page that users see and interact with in their browsers.

Question 2: Explain the key differences between JavaScript and HTML. Provide examples of situations where
you would use each.
Ans: HTML vs. Javascript
Although HTML and JavaScript both relate to web development and design, they differ in their functions, capabilities and difficulty level. Here are the fundamental similarities and differences between HTML and JavaScript:

Computing language
When creating your website, you can use both HTML and JavaScript to control the elements that visitors see on your web pages. However, these two languages communicate with your online browser in different ways.

HTML communicates with your web browser through compilation, meaning that your computer must first transform the human code into machine code. JavaScript, however, can perform the functions requested without having its scripting language translated into machine code.

Related: 50 Types of Programming Languages and What They Do
Type of content
HTML creates and changes immobile structures on a website. However, JavaScript creates and changes website features that are more dynamic or complex. For example, if you want to add a still image to your website, you use HTML to show the image's placement in relation to other elements and alignment on the page. If you want instead to put a moving image, such as an animation or an image that only appears when users scroll down a page, use JavaScript in addition to your structural HTML.

Difficulty in learning
Most computing professionals consider HTML an easier language to learn than JavaScript for a couple of reasons:

Knowledge of other computing languages: You already need to know HTML to learn JavaScript, as JavaScript frequently modifies HTML elements. Most people who learn JS also typically first learn Cascading Style Sheets (CSS), another computing language that alters website elements such as text size and background color.
Understanding of programming basics: JavaScript is one of the easier programming languages. However, learning JavaScript requires you to already understand fundamental programming language principles and techniques.

Question 3: List and describe the five primitive data types in JavaScript.
Ans; Below is a list of Primitive Data Types with proper descriptions and examples:

1. Number: Number data type in javascript can be used to hold decimal values as well as values without decimals.
2. String: The string data type in javascript represents a sequence of characters that are surrounded by single or double quotes.
3. Undefined: The meaning of undefined is ‘value is not assigned’.
4. Boolean: The boolean data type can accept only two values i.e. true and false.
5. Null: This data type can hold only one possible value that is null.

Question 4: What is the purpose of declaring variables in JavaScript, and how do you declare them using the
'let' keyword?
Ans;  In JavaScript, variables can be used to store reusable values. The values of the variables are allocated using the assignment operator(“=”).

JavaScript let is a keyword used to declare variables that are block scoped. Variables defined with the let keyword cannot be redeclared and must be declared before use.
{
    let num=10;
    // calling the function inside block
    console.log(num)
}
// calling the function outside block throws a Error
console.log(num)

Question 5: Explain the importance of comments in JavaScript and provide examples of single-line and
multi-line comments.
Ans:
Single Line Comments
Single line comments start with //.

Any text between // and the end of the line will be ignored by JavaScript (will not be executed).

This example uses a single-line comment before each code line:

Example
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";


Multi-line Comments
Multi-line comments start with /* and end with */.

Any text between /* and */ will be ignored by JavaScript.

This example uses a multi-line comment (a comment block) to explain the code:

Example
/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
/*document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";

Question 6: Explain the importance of choosing meaningful and descriptive variable names in JavaScript.
Provide an example where using a clear identifier improves code readability.
Ans:
Collaboration and Teamwork: When working in a team environment, using clear and consistent variable naming conventions becomes even more critical. It promotes effective collaboration by enabling team members to understand each other's code easily. It also reduces communication barriers and makes code reviews and discussions more efficient.

Readability and Understandability: Clear and meaningful variable names make your code more readable and understandable. When someone, including yourself, reads the code later on, descriptive variable names make it easier to comprehend the purpose and intent of the variable.*/




