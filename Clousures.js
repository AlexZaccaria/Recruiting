var t0 = performance.now();
for (var a=0; a < 999999; a++)
	Math.random();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
console.log("Using window.a is\n=======\n"+window.a+"\n=======")
#VM513:6 Call to doSomething took 6035.430000000051 #milliseconds.
#VM513:7 Using window.a is
#=======
#999999


a = function()
{
var t0 = performance.now();
for (var a=0; a < 999999; a++)
	Math.random();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
console.log("Using window.a is\n=======\n"+window.a+"\n=======")
}
#VM508:8 Call to doSomething took 1464.2849999999744 #milliseconds.
#VM508:9 Using window.a is
#=======
#function ()
#{
# [..]
#}