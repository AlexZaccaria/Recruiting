describe("Sum Checker", function () 
{
    var myres;
    
    beforeEach(function(done) 
    {
        remoteMathService(function(err, res)
        {
            myres = res;
            done();
        });
    });

    it("Expect: 3", function () 
    {
        expect(myres).toEqual(3);
    });
});