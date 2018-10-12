/*
* @Author: Administrator
* @Date:   2018-09-13 18:04:04
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-16 19:32:20
*/
window.onload = function(){
	// banner轮播图
	let banner = document.querySelector(".banner_C");
	let dots = document.querySelectorAll(".main_nav div");
	let imgs = document.querySelectorAll(".banner_C li");
	let leftBtn = document.querySelector(".main_go");
	let rightBtn = document.querySelector(".main_back");
	
	banner_opt(banner,dots,imgs,leftBtn,rightBtn,"active");

	// 导航下拉效果
	let nav_sencond = document.querySelectorAll(".nav-sencond");
	let nav_sencond_list = document.querySelectorAll(".ng-d-box");


	sencond(nav_sencond,nav_sencond_list);

	function sencond(first,senconds){
		for(let i=0;i<senconds.length;i++){
		for(let j=0;j<senconds.length;j++){
			senconds[j].style.display = "none";
			}
		first[i].onmouseover = function(){
			senconds[i].style.display = "block";
			}
		first[i].onmouseout = function(){
			senconds[i].style.display = "none";
			}
		}
	}

	// 侧导航二级页面
	let banner_nav4 = document.querySelectorAll(".banner_nav li");
	let bannersencond = document.querySelectorAll(".bannersencond");
	
	sencond(banner_nav4,bannersencond);

	// 大惠聚
	let dahuiji_main = document.querySelector(".dahuiji_main");
	let dahuiju_bottom = document.querySelectorAll(".dahuiju_bottom");
	let dahuijuleft = document.querySelector(".dahuijuleft");
	let dahuijuright = document.querySelector(".dahuijuright");
	let dahuijuwidths = parseInt(getComputedStyle(dahuiji_main,null).width);
	LRbanner(dahuiji_main,dahuiju_bottom,dahuijuleft,dahuijuright,dahuijuwidths)
// 参数一：banner盒子
// 参数二：轮播点集合
// 参数三：图片集合
// 参数四：左箭头
// 参数五：右箭头
// 参数六，banner盒子宽度
 function LRbanner(banner,imgs,leftBtn,rightBtn,widths){
	let t;
	let now = 0;
	let next = 0;
	
	imgs[0].style.left = 0;

	function move(){
		next++;
		if(next == imgs.length){
			next = 0;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = widths + "px";
		animate(imgs[now],{left:-widths});
		animate(imgs[next],{left:0});
		now = next;
	}

	function moveL(){
		next--;
		if(next == -1){
			next = imgs.length-1;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = -widths + "px";
		animate(imgs[now],{left:widths});
		animate(imgs[next],{left:0});
		now = next;
	}
	rightBtn.onclick = function(){
		move();
	}
	leftBtn.onclick = function(){
		moveL();
	}
}
 
	// 排行榜
	let S2_bottom_3 = document.querySelector(".S2_bottom_3");
	let S2_Bson3 = document.querySelectorAll(".S2_Bson3");
	let S2_bottomleft = document.querySelector(".S2_bottomleft");
	let S2_bottomright = document.querySelector(".S2_bottomright");
	let S2_Bsonwidth = parseInt(getComputedStyle(S2_bottom_3,null).width);
	LRbanner(S2_bottom_3,S2_Bson3,S2_bottomleft,S2_bottomright,S2_Bsonwidth);

	// 必抢清单
	let listwrapperList = document.querySelector(".list-wrapperList");
	let listwrapper = document.querySelectorAll(".list-wrapper");
	let listwrapperleft = document.querySelector(".list-wrapperleft");
	let listwrapperright = document.querySelector(".list-wrapperright");
	let listwrapperwidth = parseInt(getComputedStyle(listwrapperList,null).width);
	LRbanner(listwrapperList,listwrapper,listwrapperleft,listwrapperright,listwrapperwidth);

	// 置顶
	let returnTop = document.querySelector(".return");
	let rightTop = document.querySelector(".rightTop");
	top(rightTop);
	top(returnTop);
	function top(returnTop){
	returnTop.onclick = function(){
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
		}
	}

	// 右侧左拉
	let tabhover = document.querySelectorAll(".tabhover");
	let tab1_left = document.querySelectorAll(".tab1-left");

	for(let i=0;i<tab1_left.length;i++){
		for(let j=0;j<tab1_left.length;j++){
			tab1_left[j].style.left = "63px";
			}
		tabhover[i].onmouseover = function(){
			tab1_left[i].style.left = "-63px";
			}
		tabhover[i].onmouseout = function(){
			tab1_left[i].style.left = "63px";
			}
		}


	// 按需加载图片   楼层跳转
	let ms_floor = document.querySelectorAll(".ms-floor");//需要加载图片的楼层
	let floatbarlist = document.querySelectorAll(".list li");
	let searchFixed = document.querySelector(".searchFixed");
	// 楼层跳转的楼层
	let sectionfloor = document.querySelectorAll(".sectionfloor");
	// let searchFixed = documetn.querySelector(".searchFixed");
	let arr = [];//定义一个变量
	let arr1 = [];
		sectionfloor.forEach((vals,indexs)=>{
			arr1.push(vals.offsetTop);
		});
	// 每一层楼的到顶部的距离，存到数组中
	ms_floor.forEach((val,index)=>{
		arr.push(val.offsetTop);
	})
	// 页面滚动时
	window.onscroll = function(){
		// 滚动条的顶部的位置
		let bodyTop = document.body.scrollTop || document.documentElement.scrollTop;
		let floatbar = document.querySelector(".floatbar");
		if(bodyTop >= 200){
			floatbar.style.left = "5px";
			searchFixed .style.top = 0;
		}
		if(bodyTop<200){
			floatbar.style.left = "-70px";
			searchFixed .style.top = "-50px";
		}
		// 每一层楼的到顶部的距离
		arr.forEach((val,index)=>{
			if(bodyTop + innerHeight/2>= val-100){
				// 每一层楼的img
				let imgs = ms_floor[index].querySelectorAll("img");
				// 每一层楼中的每一个imgs
				imgs.forEach((value)=>{
					let url = value.getAttribute("srcs");
					value.setAttribute("src",url);
				})
			}
		})
	}
	floatbarlist.forEach((val,index)=>{
		val.onclick=function(){
			for(let i=0;i<floatbarlist.length;i++){
				for(let j=0;j<floatbarlist.length;j++){
						floatbarlist[j].style.background = "";
					}
			}
			floatbarlist[index].style.background = "#FF9900";
			animate(document.documentElement,{scrollTop:arr1[index]-50});
			animate(document.body,{scrollTop:arr1[index]-50});
		}
	})
	


















}
