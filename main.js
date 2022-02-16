"use strict";

var str = prompt("");
var teg = "p";

function wrapper(string, tegs) {

    return (`<${tegs}> ${string} </${tegs}>`);

}

var result = wrapper(str, teg);
wrapper(str, teg);
console.log(result);
