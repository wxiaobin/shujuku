var sd=3;
var j
function show()
{
	var uls=document.getElementById("topul1");
	var lis=uls.getElementsByTagName("li");
	for(var i=lis.length;i>0;i--)
	{
		lis[i-1].style.opacity="0";
	}
	lis[sd].style.opacity="1";
	sd--;
	if(sd<0)
	{
		sd=3;
	}
}

function sds()
{
	
	 j=setInterval("show()",1000);
}
