$(function(){
	var brand=$(".brand");
	node(brand[0]);
	node(brand[1]);
	node(brand[2]);
	node(brand[3]);
	node(brand[4]);
	node(brand[5]);
	node(brand[6]);
	node(brand[7]);
	node(brand[8]);
	// for(var i=0;i<brand.length;i++){
	// 	brand[i].index=i;
	// 	node(brand[this.index])
	// }
})
function node(obj){
	var ul=$("ul",obj)[0];
	var imgs=$("li",ul);
	var w=imgs[0].offsetWidth*2;

	var t=setInterval(moveL,2000);
	function moveL(){
		var first=firstChild(ul);
		animate(ul,{left:-w},function(){
			ul.appendChild(first)
			// appendAfter(first,ul)SS
			ul.style.left=0;
		});
	}
	function moveR(){
		var last=lastChild(ul);
		var first=getFirst(ul)
			ul.style.left=-w+"px";
		ul.insertBefore(last,first)
		animate(ul,{left:0},function(){
		})
	}
}