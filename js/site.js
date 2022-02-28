var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);

document.getElementById("question").innerText = "Answer  this: " + num1 + " + " + num2 + "=" ;

function ShowNotification()
{
    document.getElementById("notify").innerText = "Message successfully delivered.";
}

function CheckAnswer(){

    var ans = document.querySelector('#answer').value;

    if(num1 + num2 == parseInt(ans)){
        document.getElementById("question-container").style.display = "none";
        document.getElementById("submitBtn").style.display = "block";
    }
    else{
        document.getElementById("notify").innerText = "Incorrect answer. Please try again."
    }
}

document.getElementById('questioin-container').style.display ="block";