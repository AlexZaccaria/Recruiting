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

foo(function(err, res)
{
    if (err) 
        console.log('Error: ', err);
    else
        console.log('Done!', res);
});
