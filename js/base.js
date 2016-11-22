init();
function init(){
	if(!document.addEventListener){
	    window.open('../浏览器/index.html','_self')
	    return
	}
/***********菜单*****************/
var seek=document.getElementById('seek');
var category=document.getElementById('category');
var newGoods=document.getElementById('newgoods');
var boyCloth=document.getElementById('boycloth');
var grilCloth=document.getElementById('grilcloth')
var familyCloth=document.getElementById('familycloth')
var shoes=document.getElementById('shoes')
var watch=document.getElementById('watch')
var studyArtical=document.getElementById('study-artical')
var toyArtical=document.getElementById('toy-artical')
var details1=document.getElementById('details1');
var details2=document.getElementById('details2');
var details3=document.getElementById('details3');
var details4=document.getElementById('details4');
var details5=document.getElementById('details5');
var details6=document.getElementById('details6');
var details7=document.getElementById('details7');
var details8=document.getElementById('details8');
seek.onmouseover=function(){
	category.style.display="block";
}
seek.onmouseout=function(){
	setInterval(function(){
		category.style.display="none";
},30000)
}
function detaliB(obj1,obj2){//显示函数
	obj1.onmouseover=function(){
	obj2.style.display="block";
	}
}
function detaliN(obj1,obj2){//隐藏函数
	obj1.onmouseout=function(){
	obj2.style.display="none";
	}
}
detaliB(newGoods,details1);
detaliN(newGoods,details1);
detaliB(boyCloth,details2);
detaliN(boyCloth,details2);
detaliB(grilCloth,details3);
detaliN(grilCloth,details3);
detaliB(familyCloth,details4);
detaliN(familyCloth,details4);
detaliB(shoes,details5);
detaliN(shoes,details5);
detaliB(watch,details6);
detaliN(watch,details6);
detaliB(studyArtical,details7);
detaliN(studyArtical,details7);
detaliB(toyArtical,details8);
detaliN(toyArtical,details8);
/*************搜索**************/
var search=document.getElementById('search');
var searchBtn=document.getElementsByClassName('search-title')[0];
search.onclick=function(){
	search.style.color="#ddd";
}
search.onkeydown=function(){
	search.style.color="#333";
}
searchBtn.onclick=function(){
	window.open('http://www.baidu.com');
}
searchBtn.onkeydown=function(e){
	var e=e||window.event
	if(e.keyCode===13)
	{
		window.open('http://www.souhu.com');
	}
}
/****************hot***********/
var hot=document.getElementById('hot');
var hot1=document.getElementById('hot1');
var hot2=document.getElementById('hot2');
var hot3=document.getElementById('hot3');
var hot4=document.getElementById('hot4');
var hot5=document.getElementById('hot5');
var hot6=document.getElementById('hot6');
var hot7=document.getElementById('hot7');
function run(){
	if(hot.style.display=="none")
	{
		hot.style.display="block";
	}else{
		hot.style.display="none";
	}
	if(hot1.style.display=="none")
	{
		hot1.style.display="block";
	}else{
		hot1.style.display="none";
	}
	if(hot2.style.display=="none")
	{
		hot2.style.display="block";
	}else{
		hot2.style.display="none";
	}
	if(hot3.style.display=="none")
	{
		hot3.style.display="block";
	}else{
		hot3.style.display="none";
	}
	if(hot4.style.display=="none")
	{
		hot4.style.display="block";
	}else{
		hot4.style.display="none";
	}
	if(hot5.style.display=="none")
	{
		hot5.style.display="block";
	}else{
		hot5.style.display="none";
	}
	if(hot6.style.display=="none")
	{
		hot6.style.display="block";
	}else{
		hot6.style.display="none";
	}
	if(hot7.style.display=="none")
	{
		hot7.style.display="block";
	}else{
		hot7.style.display="none";
	}
}
setInterval(run,500);
/*setInterval("run(hot2);",500);
setInterval("run(hot3);",500);
setInterval("run(hot4);",500);
setInterval("run(hot5);",500);
setInterval("run(hot6);",500);
setInterval("run(hot7);",500);*/
/************展示产品************/
var exhiBox=document.querySelector(".exhi");
var pic=document.getElementById('pic');
var exhiBoxBott=document.querySelector(".exhi-bottom");
var aLi=exhiBoxBott.getElementsByTagName('li');
var imgArr=['img/show1.png','img/show2.png','img/show3.png','img/show4.png','img/show5.png'];
/************手动变化***********/
for(var i=0,len=imgArr.length;i<len;i++){
	aLi[i].index=i;
	aLi[i].onmouseover=function(){
		var _index=this.index;
		init(_index);
		for(var j=0,len1=imgArr.length;j<len1;j++){
			aLi[j].className="fl";
		}
		this.className="active fl";
	}
}
/*******初始化函数********/
var num=0;
function init(num){
	pic.src=imgArr[num];
}
/********自动播放*******/
var i=0;
setInterval(function(){
	pic.src=imgArr[i];
	i++;
	if(i===5)
	i=0;
},3000)
/************颜色选择*******/
var colorBox=document.getElementsByClassName('color-box')[0];
var aLi1=colorBox.getElementsByTagName('li');
var activeBox=document.getElementsByClassName('active1')[0];
for(var m=0,len1=aLi1.length;m<len1;m++){
	aLi1[m].index=m;
	aLi1[m].onclick=function(){
		var _index=this.index;
		activeBox.style.display="block";
		activeBox.style.top="12px";
		activeBox.style.left=(55+(_index*90))+"px";
	}
}
/**********高度选择******/
var heightBox=document.getElementsByClassName('height-box')[0];
var aLi2=heightBox.getElementsByTagName('li');
var activeBox2=document.getElementsByClassName('active2')[0];
for(var n=0,len2=aLi2.length;n<len2;n++){
	aLi2[n].index=n;
	aLi2[n].onclick=function(){
		var _index1=this.index;
		activeBox2.style.display="block";
		activeBox2.style.top="12px";
		activeBox2.style.left=(55+(_index1*90))+"px";
	}
}
/******************数量加减********/
var add=document.getElementsByClassName("add")[0];
var midus=document.getElementsByClassName("midus")[0];
var amount=document.getElementsByClassName("amount")[0];
var nu=0;
add.onclick=function(){
	if(nu>=0)
	nu++;
	amount.innerText=nu;
}
midus.onclick=function(){
	if(nu>0)
	nu--;
	amount.innerText=nu;
}
/*************加入购物车***********/
var car=document.getElementsByClassName('car')[0];
var number1=document.getElementsByClassName('number1')[0];
var nu1=0;
car.onclick=function(){
	if(nu1>=0)
	nu1++;
	number1.innerText=nu1;
}
/*************商品介绍*******/
var active3=document.getElementsByClassName('active3')[0];
var productIntro=document.getElementsByClassName("product-intro")[0];
var productEval=document.getElementsByClassName("product-eval")[0];
productEval.onmouseover=function(){
	active3.style.left="100px";
}
productEval.onclick=function(){
	productEval.className="product-intro fl active4";
	productIntro.className="product-eval fl";
}
productIntro.onmouseover=function(){
	active3.style.left="0px";
}
productIntro.onclick=function(){
	productIntro.className="product-intro fl active4";
	productEval.className="product-eval fl";
}
/******************右边**********/
var chatImg=document.getElementsByClassName('chatimg')[0];
var chat=document.getElementsByClassName('chat')[0];
var topImg=document.getElementsByClassName('topimg')[0];
var chatBox=document.getElementsByClassName('chat-box')[0];
var backBox=document.getElementsByClassName('back-box')[0];
var backTop=document.getElementsByClassName('backtop')[0];
chatImg.onmouseover=function(){
	chatBox.style.display="block";
}
chat.onmouseleave=function(){
	chatBox.style.display="none";
}
topImg.onmouseover=function(){
	backBox.style.display="block";
}
backTop.onmouseleave=function(){
	backBox.style.display="none";
}
window.onscroll=function(){
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		backTop.onclick=function(){
			document.documentElement.scrollTop=0;
			document.body.scrollTop=0;
		}
		if(scrollT>550)
		{
			backTop.style.display="block";
		}else{
			backTop.style.display="none"
		}
	}
/*************图片上下动******/
var shang=document.getElementById('shang');
var xia=document.getElementById('xia');
var bigBox=document.getElementsByClassName('big-box')[0];
var picUl=bigBox.getElementsByTagName('ul');
var numTop=0;len=picUl.length;
shang.onclick=function(){
	numTop++;
	if(numTop===len){
		numTop=0;
	}
	picUl[num].style.marginTop=-455*numTop+"px";
}
xia.onclick=function(){
	numTop--;
	if(numTop<0){
		numTop=len-1;
	}
	picUl[num].style.marginTop=-455*numTop+"px";
}

}



