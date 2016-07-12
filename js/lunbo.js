$(function(){
	// banner轮播
	var banner=$(".banner")[0];
	var banMid=$(".middles",banner)[0];
	var banPhoto=$(".photos",banMid)[0];
	var banImgs=$("a",banPhoto);
	var banBack=$(".backg",banner)[0];
	var banBackPho=$("li",banBack);
	//点点
	var banBtn=$(".diandian",banner)[0];
	var banLis=$("li",banBtn);
	// 箭头
	var next=$(".next")[0];
	var jiantou=$("li",next)

	// 设置初始状态
	var banNum=0;
	banImgs[0].style.zIndex=3;
	banLis[0].style.background="#e5004f";
	banBackPho[0].style.zIndex=1;
	next.style.opacity=0;
	var flag=true;

	//自动轮播
	var banT=setInterval(moveR,1000);
	// 鼠标上去停止
	banMid.onmouseover=function(){
		clearInterval(banT);
		next.style.opacity=0.6;
	}
	// 鼠标挪走继续轮播
	banMid.onmouseout=function(){
		banT=setInterval(moveR,1000);
		next.style.opacity=0;
	}
	// 点点选项卡
	for(var i=0;i<banLis.length;i++){
		banLis[i].index=i;
		banLis[i].onmouseover=function(){
			for(var j=0;j<banLis.length;j++){
				banImgs[j].style.zIndex=2;
				banLis[j].style.background="#211616";
				banBackPho[j].style.zIndex=0;
			}
			banImgs[this.index].style.zIndex=3;
			banLis[this.index].style.background="#e5004f";
			banBackPho[this.index].style.zIndex=1;
			banNum=this.index;
		}
	}
	// 箭头
	jiantou[0].onclick=function(){
		// if(flag){
		// 	flag=false;
			moveL();
		// }
	}
	jiantou[1].onclick=function(){
		// if(flag){
		// 	flag=false;
			moveR();
		// }
	}
	jiantou[0].onmouseover=function(){
		jiantou[0].style.backgroundImage="url('./images/prevnext.png')"
		jiantou[0].style.backgroundPosition="0px 60px"
	}
	jiantou[0].onmouseout=function(){
		jiantou[0].style.backgroundImage="url('./images/prevnext.png')"
		jiantou[0].style.backgroundPosition="0px 0px"
	}
	jiantou[1].onmouseover=function(){
		jiantou[1].style.backgroundImage="url('./images/prevnext.png')"
		jiantou[1].style.backgroundPosition="30px 60px"
	}
	jiantou[1].onmouseout=function(){
		jiantou[1].style.backgroundImage="url('./images/prevnext.png')"
		jiantou[1].style.backgroundPosition="30px 0px"
	}
	// 向右轮播
	function moveR(){
		banNum++;
		if(banNum==banImgs.length){
			banNum=0;
		}
		for(var i=0;i<banImgs.length;i++){
			banImgs[i].style.zIndex=2;
			banLis[i].style.background="#211616";
			banBackPho[i].style.zIndex=0;
		}
		banImgs[banNum].style.zIndex=3;
		banLis[banNum].style.background="#e5004f";
		banBackPho[banNum].style.zIndex=1;
	}
	// 向左轮播
	function moveL(){
		banNum--;
		if(banNum<0){
			banNum=banImgs.length-1;
		}
		for(var i=0;i<banImgs.length;i++){
			banImgs[i].style.zIndex=2;
			banLis[i].style.background="#211616";
			banBackPho[i].style.zIndex=0;
		}
		banImgs[banNum].style.zIndex=3;
		banLis[banNum].style.background="#e5004f";
		banBackPho[banNum].style.zIndex=1;
		
	}
	
})