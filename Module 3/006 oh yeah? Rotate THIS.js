/*
Problem description (de-obfuscate with ROT-13 as usual).
There's an extra hint in there, too, if you need it!

Focus on getting a working solution with the tools you know well.
Practice the interactive/collaborative interview style that's described in the documentation.

Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint:  (de-obfuscate with ROT-20, there's a dropdown on http://rot13.com to select that)
If you double the string, you'll be to trivially find another string inside it using regular String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w    '
*/

function isRotated(str1, str2) {
  var str = str1 + str1;

  if (str.indexOf(str2) !== -1) {
    return true;
  }

  return false;
}

console.log(isRotated('hello world', 'orldhello w'));
