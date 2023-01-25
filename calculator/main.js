
function addNums(num1, num2) {
    var num1 = parseInt(document.getElementById("num1").value);         // converts the value to an integer and
    var num2 = parseInt(document.getElementById("num2").value);         // selects the input element and gets its value
    var result = num1 + num2;                   // stores the addition of two numbers in result
    document.getElementById('result').innerHTML = result;               // specifies the output to appear in the element
    return result;                                                      // with id result
}

function subtractNums(num1, num2) {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById('result').innerHTML = result;
    return result;
}

function multiplyNums(num1, num2){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById('result').innerHTML = result;
    return result;
}

function divideNums(num1, num2){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 / num2;
    document.getElementById('result').innerHTML = result;
    
    if(num2 == 0){
        alert("Undefined!")
    } else{
    return result;
    }
}

function reset(){
    window.location.reload("Reset");
}