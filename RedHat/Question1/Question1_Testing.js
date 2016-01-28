var myerr = 1;

function doThing(cb)
{
    //print only pair numbers
    if (myerr%2 === 0)
        cb(null, myerr);
    else
        cb('spare number!');    
    
    myerr ++;
}

function foo(callback) 
{
    doThing(function(err, res) 
    {
        if (err) 
            callback(err);
        else
            callback(null, res);
    });
}

while (myerr != 10)
    foo(function(err, res)
    {
        if (err) 
            console.log('Error: ', err);
        else
            console.log('Done!', res);
    });
