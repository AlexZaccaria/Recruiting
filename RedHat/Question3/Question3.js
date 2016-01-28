var counter = 0;

var db = 
{
    connect: function(cb) 
    {
        console.log('connection attempt', counter + 1);
        
        if (counter < 9) 
        {
            counter++;
            setTimeout(function(){ db.connect(cb); }, Math.pow(2, counter)*1000);
            return cb('db not ready yet');
        }
        
        return cb();
    }
};

// Try to connect, log a successful connection & exit
// If we fail to connect, log an error and return
db.connect(function(err) 
{
    if (err) 
    {
        console.error(err);
        return;
    }
    
    console.log('successfully connected!');
});
