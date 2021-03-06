function remoteMathService(cb) 
{
    var one;
    var two;
    
    callOneService(function(err, num)
    { 
        one = num;
        if (!isNaN(one+two))
            cb(undefined, one + two);
    });
    
    callTwoService(function(err, num) 
    { 
        two = num; 
        if (!isNaN(one+two))
            cb(undefined, one + two);
    });
}

function callOneService(cb) 
{
    setTimeout(function() 
    { return cb(undefined, 1); }, 1000);
}

function callTwoService(cb) 
{
    setTimeout(function() 
    { return cb(undefined, 2); }, 1500);
}

remoteMathService(function(err, answer) 
{
    if (err) 
        console.log("error ", err);
    else if (answer !== 3)
        console.log("wrong answer", answer);
    else 
        console.log("correct");
});