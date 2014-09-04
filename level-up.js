// Numbers
4;
// will return the number 4
5.3;
// will return the number 5.3
3e5;
// will return 300000

// Strings
"hello";
// will return "hello"
"that's awesome";
// will return "that's awesome"
'that\'s awesome';
// will return "that's awesome"

// Booleans
5 < 7;
// will return true
7 == 8;
//will return false
"grass" == "green";
//will return false

// Operators
// assignment operator
var grass = "green";
// will return "undefined", but when I pass grass; will return "green"
//number operators
5 + 7;
// will return 12
5 - 7;
// will return -2
15 / 3;
// will return 5
5 * 3;
// will return 15
5++;
// will return 6 - not sure about this one, based on examples in class
// actually returned the following error: ReferenceError: Invalid left-hand side expression in postfix operation
5--;
// will return 4 - see above
// actually returned the following error: ReferenceError: Invalid left-hand side expression in prefix operation
14 % 3;
// will return 2
// Compound assignments
grass += " grass";
// will return "green grass" (but only if i actually ran the var grass = "green" earlier)
var age = 30;
age -= 3;
age;
// will return 27;
// String operator
"I am" + " awesome"
// will return "I am awesome"
