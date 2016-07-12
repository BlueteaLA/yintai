$(function(){
	// 头部导航
	// 微信跟手机银泰后面有的小箭头
	// 小箭头后面反转
	// 图标颜色变化
	var headNav=$(".nav",$(".head")[0])[0];
	// 左边
	var navLeft=$(".left",headNav)[0];
	var navLelis=$("li",navLeft);
	// 银泰首页
	navLelis[0].onmouseover=function(){
		// navLelis[0].style.backgroundImage="./images/header-02.png"
		navLelis[0].style.backgroundPosition="-216px 7px";
	}
	navLelis[0].onmouseout=function(){
		navLelis[0].style.backgroundPosition="-216px 7px";
	}
	// 微信
	var wechat=$("div",navLelis[2])[0];
	navLelis[2].onmouseover=function(){
		wechat.style.display="block";
		navLelis[2].style.background="#ffffff";
		navLelis[2].style.backgroundPosition="-225px -80px";
	}
	navLelis[2].onmouseout=function(){
		wechat.style.display="none";
		navLelis[2].style.background="#eeeeee";
		navLelis[2].style.backgroundPosition="-225px -50px";
	}
	// 手机银泰
	var phoneApp=$(".phone",navLelis[4])[0];
	navLelis[4].onmouseover=function(){
		phoneApp.style.display="block";
		navLelis[4].style.background="#ffffff";
		navLelis[4].style.backgroundPosition="4px -29px";
	}
	navLelis[4].onmouseout=function(){
		phoneApp.style.display="none";
		navLelis[4].style.background="#eeeeee";
		navLelis[4].style.backgroundPosition="4px 8px";
	}
	// 右边
	var navRight=$(".right",headNav)[0];
	var navRili=$("li",navRight)[6];
	var yintai=$(".yintai",navRili)[0];
	navRili.onmouseover=function(){
		yintai.style.display="block";
		navRili.style.background="#ffffff";
	}
	navRili.onmouseout=function(){
		yintai.style.display="none";
		navRili.style.background="#eeeeee";
	}



	// // 购物袋
	// var shop=$(".shop")[0];



	// banner 左边部分导航
	var banner=$(".banner")[0];
	var banLeft=$("ul",banner)[0];
	var banleftNav=$("li",banLeft);
	var inner=$(".inner1",banLeft);
	for(var i=0;i<banleftNav.length;i++){
		banleftNav[i].index=i;
		banleftNav[i].onmouseover=function(){
		    inner[this.index].style.display="block";
		    banleftNav[this.index].backgroundPosition="-17px*this.index -130px";
		    // banleftNav[this.index].backgroundPositionTop=-130+"px";
	    }
	    banleftNav[i].onmouseout=function(){
		    inner[this.index].style.display="none";
		    // banleftNav[this.index].backgroundPositionTop=-110+"px";
	    }
	}
	// 右边广告
	var banRight=$(".right",banner)[0];
	banRight.onmouseover=function(){
		animate(banRight,{right:89},Tween.Quad.easeInOut)
		// banRight.style.right=89+"px";
	}
	banRight.onmouseout=function(){
		animate(banRight,{right:79},Tween.Quad.easeInOut)
		// banRight.style.right=79+"px";
	}



	// // 超值特卖
	// // 获取所用元素
	var appvip=$(".appvip")[0];
	var appLeft=$(".left",appvip)[0];
	var products=$(".product",appLeft);
	console.log(products)
	var xuanxiang=$("div",appLeft);
	var chaozhi=$(".chaozhi",appLeft)[0];
	var baokuan=$(".baokuan",appLeft)[0];
	var shouji=$(".shouji",appLeft)[0];
	var bottoms=$(".bottom",appLeft);
	// 设置初始化状态
	// chaozhi.style.borderBottomWidth=5+"px";
	// chaozhi.style.borderStyle="solid";
	// chaozhi.style.borderColor="#e4005f";
	bottoms[0].style.display="block";
	bottoms[0].style.zIndex=1;
	// 鼠标变化
	for(var i=0;i<xuanxiang.length;i++){
		xuanxiang[i].index=i;
		xuanxiang[i].onmouseover=function(){
			for(var j=0;j<bottoms.length;j++){
				bottoms[j].style.display="none";
			}
			bottoms[this.index].style.display="block";
			// xuanxiang[this.index].style.borderBottomWidth=5+"px";
			// xuanxiang[this.index].style.borderStyle="solid";
			// xuanxiang[this.index].style.borderColor="#e4005f";
		}
	}

	// 超值特卖动效线
	var appLine1=$("li",bottoms[0]);
	var appLine2=$("li",bottoms[1]);
	yinTaiLine(appLine1[0]);
	yinTaiLine(appLine1[1]);
	yinTaiLine(appLine1[2]);
	yinTaiLine(appLine1[3]);
	yinTaiLine(appLine2[0]);
	yinTaiLine(appLine2[1]);
	yinTaiLine(appLine2[2]);
	yinTaiLine(appLine2[3]);

	


	// 专柜同款
	var special=$(".special")[0];
	var speWord=$(".words",special);
	var speWordRe=$("li",speWord[0]);
	var speWordBen=$("li",speWord[1]);
	var spePhoRe=$(".photos",special)[0];
	var spePhoBen=$(".photos",special)[1];
	// spePhoRe.style.display="block";
	spePhoBen.style.display="block";
	// 有点小问题
	speWordRe.onmouseover=function(){
		spePhoRe.style.display="block";
		spePhoBen.style.display="none";
	}
	speWordBen.onmouseover=function(){
		spePhoRe.style.display="none";
		spePhoBen.style.display="block";
	}


	
	// 动效线
	speLine1=$("li",spePhoBen);
	yinTaiLine(speLine1[0]);
	yinTaiLine(speLine1[1]);
	yinTaiLine(speLine1[2]);
	yinTaiLine(speLine1[3]);
	yinTaiLine(speLine1[4]);
	yinTaiLine(speLine1[5]);
	yinTaiLine(speLine1[6]);
	yinTaiLine(speLine1[7]);




	// 时尚名品动态线
	var goods=$(".goods")[0];
	var goodsRig=$(".right",goods)[0];
	var goodsLine=$("li",goodsRig);
	yinTaiLine(goodsLine[0]);
	yinTaiLine(goodsLine[1]);
	yinTaiLine(goodsLine[2]);
	yinTaiLine(goodsLine[3]);

	// 潮流女装动态线
	var women=$(".womens")[0];
	var womenRig=$(".right",women)[0];
	var womenLine=$("li",womenRig);
	yinTaiLine(womenLine[0]);
	yinTaiLine(womenLine[1]);
	yinTaiLine(womenLine[2]);
	yinTaiLine(womenLine[3]);

	// 精品男装动态线
	var men=$(".mens")[0];
	var menRig=$(".right",men)[0];
	var menLine=$("li",menRig);
	yinTaiLine(menLine[0]);
	yinTaiLine(menLine[1]);
	yinTaiLine(menLine[2]);
	yinTaiLine(menLine[3]);

	// 时尚鞋靴动态线
	var footwear=$(".footwear")[0];
	var footwearRig=$(".right",footwear)[0];
	var footwearLine=$("li",footwearRig);
	yinTaiLine(footwearLine[0]);
	yinTaiLine(footwearLine[1]);
	yinTaiLine(footwearLine[2]);
	yinTaiLine(footwearLine[3]);

	// 潮流箱包动态线
	var bag=$(".bags")[0];
	var bagRig=$(".right",bag)[0];
	var bagLine=$("li",bagRig);
	yinTaiLine(bagLine[0]);
	yinTaiLine(bagLine[1]);
	yinTaiLine(bagLine[2]);
	yinTaiLine(bagLine[3]);

	// 美容护肤动态线
	var beauty=$(".beauty")[0];
	var beautyRig=$(".right",beauty)[0];
	var beautyLine=$("li",beautyRig);
	yinTaiLine(beautyLine[0]);
	yinTaiLine(beautyLine[1]);
	yinTaiLine(beautyLine[2]);
	yinTaiLine(beautyLine[3]);

	// 户外运动动态线
	var outdoor=$(".outdoors")[0];
	var outdoorRig=$(".right",outdoor)[0];
	var outdoorLine=$("li",outdoorRig);
	yinTaiLine(outdoorLine[0]);
	yinTaiLine(outdoorLine[1]);
	yinTaiLine(outdoorLine[2]);
	yinTaiLine(outdoorLine[3]);

	// 内衣配饰动态线
	var underwear=$(".underwear")[0];
	var underwearRig=$(".right",underwear)[0];
	var underwearLine=$("li",underwearRig);
	yinTaiLine(underwearLine[0]);
	yinTaiLine(underwearLine[1]);
	yinTaiLine(underwearLine[2]);
	yinTaiLine(underwearLine[3]);

	// 婴童家居动态线
	var baby=$(".babys")[0];
	var babyRig=$(".right",baby)[0];
	var babyLine=$("li",babyRig);
	yinTaiLine(babyLine[0]);
	yinTaiLine(babyLine[1]);
	yinTaiLine(babyLine[2]);
	yinTaiLine(babyLine[3]);



	// 6个部分的小轮播
	var content=$(".content")[0];
	var lunbowai=$(".lunbowai",content)
	var lunbo=$(".lunbo");

	for(var i=0;i<lunbowai.length;i++){
		lunbowai[i].index=i;

		// 计数
		var picNum=0;
		
		// 鼠标在图片上
		lunbowai[i].onmouseover=function(){
			// 获取图片
			var pic=$(".picture",lunbowai[this.index])[0];
			var pictures=$("li",pic);
			// 获取点点
			var diandian=$(".diandian",lunbowai[this.index])[0];
			var zuodian=$("li",diandian)[0];
			var youdian=$("li",diandian)[1];

			// 点点点击时
			zuodian.onclick=function(){
				for(var i=0;i<pictures.length;i++){
					pictures[i].style.zIndex=0;
				}
				zuodian.className="hongse";
				youdian.className="";
				pictures[0].style.zIndex=1;
			}
			youdian.onclick=function(){
				for(var i=0;i<pictures.length;i++){
					pictures[i].style.zIndex=0;
				}
				zuodian.className="";
				youdian.className="hongse";
				pictures[1].style.zIndex=1;
			}

			// 箭头出现
			lunbo[this.index].style.opacity=0.6;

			// 箭头的设置
			for(var j=0;j<lunbo.length;j++){
				lunbo[j].index=j;
				lunbo[j].onmouseover=function(){
					// 两边的箭头
					var xiangzuo=$(".xiangzuo",lunbo[this.index])[0];
					var xiangyou=$(".xiangyou",lunbo[this.index])[0];

					// 向左鼠标移上去
					xiangzuo.onmouseover=function(){
						// 变红
						xiangzuo.style.backgroundPosition="0px 60px";
					}

					// 向左鼠标移走
					xiangzuo.onmouseout=function(){
						// 变黑
						xiangzuo.style.backgroundPosition="0px 0px";
					}

					// 向右鼠标移上去
					xiangyou.onmouseover=function(){
						// 变红
						xiangyou.style.backgroundPosition="-30px 60px";
					}

					// 向右鼠标移走
					xiangyou.onmouseout=function(){
						// 变黑
						xiangyou.style.backgroundPosition="-30px 0px";
					}


					// 点击换图
					// 向左
					xiangzuo.onclick=function(){
						picNum--;
						if(picNum<=0){
							picNum=0;
							for(var k=0;k<pictures.length;k++){
								pictures[k].style.zIndex=0;
							}
							pictures[picNum].style.zIndex=1;
						}
						if(picNum>0){
							picNum=0;
							for(var k=0;k<pictures.length;k++){
								pictures[k].style.zIndex=0;
							}
							pictures[picNum].style.zIndex=1;
						}
						zuodian.className="hongse";
						youdian.className="";
					}
					// 向右
					xiangyou.onclick=function(){
						picNum++;
						if(picNum>=1){
							picNum=1;
							for(var k=0;k<pictures.length;k++){
								pictures[k].style.zIndex=0;
							}
							pictures[picNum].style.zIndex=1;
						}
						if(picNum==0){
							picNum=1;
							for(var k=0;k<pictures.length;k++){
								pictures[k].style.zIndex=0;
							}
							pictures[picNum].style.zIndex=1;
						}
						zuodian.className="";
						youdian.className="hongse";
					}
				}
			}


		}
		// 鼠标移出图片
		lunbowai[i].onmouseout=function(){
			// 箭头消失
			lunbo[this.index].style.opacity=0;
		}
	}
	


	
})