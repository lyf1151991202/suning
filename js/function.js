/*
* @Author: Administrator
* @Date:   2018-09-11 16:00:25
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-13 18:34:51
*/
// 参数一：banner盒子
	// 参数二：轮播点集合
	// 参数三：图片集合
	// 参数四：左箭头
	// 参数五：右箭头
	// 参数六：时间间隔
	// 参数七：轮播点变化样式类名
	function banner_opt(banner,dots,imgs,leftBtn,rightBtn,active){
		let num = 0;
		let t;
		// 默认第一张图显示
		imgs[0].style.opacity = 1;
		dots[0].classList.add(active);
		// 轮播点
		for(let i=0;i<dots.length;i++){
			dots[i].onmouseover = function(){
				for(let j=0;j<imgs.length;j++){
					imgs[j].style.opacity = 0;
					dots[j].classList.remove(active);
				}
				imgs[i].style.opacity = 1;
				dots[i].classList.add(active);
				// 当鼠标移走后，继续轮播
				num = i;
			}
		}
		// 实现自动轮播
		t = setInterval(move,1500);
		function  move(){
			num++;
			if(num == imgs.length){
				num = 0;
			}
			for(let j=0;j<imgs.length;j++){
					imgs[j].style.opacity = 0;
					dots[j].classList.remove(active);
				}
			imgs[num].style.opacity = 1;
			dots[num].classList.add(active);
		}
		// 鼠标移入banner后暂停轮播
		banner.onmouseover = function(){
			clearInterval(t);
		}
		banner.onmouseout = function(){
			t = setInterval(move,1500);
		}
		// 左右箭头点击轮播
		rightBtn.onclick = function(){
			move();
		}
		leftBtn.onclick = function(){
			moveL();
		}
		function moveL(){
			num--;
			if(num < 0){
				num = imgs.length-1;
			}
			for(let j=0;j<imgs.length;j++){
					imgs[j].style.opacity = 0;
					dots[j].classList.remove(active);
				}
			imgs[num].style.opacity = 1;
			dots[num].classList.add(active);
		}
		// 10、窗口失去焦点时，暂停时间间隔函数
		window.onblur = function(){
			clearInterval(t);
		}
		window.onfocus = function(){
			t = setInterval(move,1500);
		}
 }




// 参数一：banner盒子
// 参数二：轮播点集合
// 参数三：图片集合
// 参数四：左箭头
// 参数五：右箭头
// 参数六，banner盒子宽度
 function LRbanner(banner,dots,imgs,leftBtn,rightBtn,widths,active){
	let t;
	let now = 0;
	let next = 0;
	let flag = true;
	
	dots[0].classList.add(active);
	// animate(imgs[0],{left:0});
	imgs[0].style.left = 0;
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover = function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove(active);
				imgs[j].style.left = -widths+"px";
			}
			dots[i].classList.add(active);
			imgs[i].style.left = 0;
			now = i;
			next = i;
		}
	}

	// 自动轮播
	t = setInterval(move,1500);
	function move(){
		next++;
		if(next == imgs.length){
			next = 0;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = widths + "px";
		animate(imgs[now],{left:-widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove(active);
				flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add(active);
			flag = true;
		});
		now = next;
	}

	banner.onmouseover = function(){
		clearInterval(t);
	}
	banner.onmouseout = function(){
		t = setInterval(move,1500);
	}

	function moveL(){
		if(!flag){
			return;
		}
		flag = false;
		next--;
		if(next == -1){
			next = imgs.length-1;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = -widths + "px";
		animate(imgs[now],{left:widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove(active);
				flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add(active);
			flag = true;
		});
		now = next;
	}
	rightBtn.onclick = function(){
		if(!flag){
			return
		}
		flag = false;
		move();
	}
	leftBtn.onclick = function(){
		moveL();
	}
	window.onblur = function(){
		clearInterval(t);
	}
	window.onfocus = function(){
		t = setInterval(move, 1500);
	}
}