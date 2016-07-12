$(function(){
            // 可视屏幕高度
        	var cw=document.documentElement.clientHeight;
            // 楼层
        	var floors=$(".floor");
            // 用来获取每个楼层距离顶端的距离
        	var floorArr=[];
        	for(var i=0;i<floors.length;i++){
        		floorArr.push(floors[i].offsetTop);
        	}
            // 楼层跳转
            var sidebar=$(".sidebar")[0];
            var jumps=$(".jump");
            // var jumps=$("li",jump);
            // 返回顶部
            var back=$(".back")[0];

            // 开关
            // var flag=true;
            var hiddenFlag=true;



            // 滚动条事件
        	window.onscroll=function(){
                // 获取滚动条距离顶层位置
        		var obj=document.body.scrollTop?document.body:document.documentElement
        		var scrolltop=obj.scrollTop;
                // 按需加载
        		for(var i=0;i<floorArr.length;i++){
        			if(scrolltop+cw>=floorArr[i]+100){
        				var imgs=$("img",floors[i]);
                        for(var j=0;j<imgs.length;j++){
                            imgs[j].src=imgs[j].getAttribute("imgpath")
                        }
        			}
        		}


                // 开关
                // if(flag){return}
                // 在谁的楼层谁亮
                for(var i=0;i<jumps.length;i++){
                    if(scrolltop>floorArr[i]-100){
                        for(var j=0;j<jumps.length;j++){
                            jumps[j].className="";
                        }
                        // jumps[this.index].className="hot";
                    }
                }


                // 返回顶部
                back.onclick=function(){
                    // var obj=document.body.scrollTop?document.body:document.documentElement
                    animate(obj,{scrollTop:0});
                }


                // 部分功能隐藏
                if(scrolltop>=floorArr[0]){
                    if(hiddenFlag){
                        hiddenFlag=false;
                        animate(sidebar,{right:24});
                    }
                }else{
                    if(!hiddenFlag){
                        hiddenFlag=true;
                        animate(sidebar,{right:-100});
                    }
                }
        	}



            // 楼层跳转
            for(var i=0;i<jumps.length;i++){
                jumps[i].index=i;
                jumps[i].onclick=function(){
                    // 楼层跳转
                    var obj=document.body.scrollTop?document.body:document.documentElement ;
                    animate(obj,{scrollTop:floorArr[this.index]}/*,function(){flag=true;}*/);
                    // obj.scrollTop=floorArr[this.index];

                    // 按钮变红
                    for(var j=0;j<jumps.length;j++){
                        jumps[j].className="";
                    }
                    jumps[this.index].className="hot";
                }
            }    
        })

        // bug1：楼层跳转开关问题