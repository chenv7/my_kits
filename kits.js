//常用JS代码

var kits = {};

//指定区间的随机整数
kits.randomInt = function(n,m){
	return Math.floor(Math.random() * ( m - n + 1 ) + n);
}


//数学函数

//把浮点数进行四舍五入取整
kits.roundInt = function(n){
	return Math.round(n);
} 

//求一个数的绝对值

kits.absoluteInt = function(n){
	return Math.abs(n);
}

//求多个数字中的最大值

kits.maxInt = function(n){
	return Math.max(n);
}

//求多个数字中的最小值
kits.minInt = function(n){
	return Math.min(n);
}

//Array数组的栈方法

//遍历数组
kits.traverse = function(n,m){
	var sum = 0;
	for (var i = n; i < m.length; i++){
		sum += m[i];
	}
	return sum;
}
//获取时间
kits.formateDate = function() {
    let date = new Date();
    let year = date.getFullYear();
    let months = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    //让小于两位数的数值前面+ 0 ;
    months = months < 10 ? '0' + months : months;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    //时间的格式yyyy-mm-dd hh:mm:ss
    let time = year + '-' + months + '-' + day +' ' + hours + ':' + minutes + ':' + seconds;
    console.log(time);

}
// 随机整数
kits.randomInt = function(n,m){
    return Math.floor(Math.random() *(m-n+1) + n);
  }
  
  /**
   * 封装的是一个可以生成唯一id的方法
   */
  kits.primaryKey = function(){
    // 我们通过时间戳 + 大范围的随机数来生成id
    let now = Date.now(); //得到是从1970年到现在为止的总的毫秒数
    // 为了防止在1毫秒之内生成的id有多个，再次加上一个大范围的随机数
    let r = kits.randomInt(100000,999999);
    // console.log(r);
    // 把两个得到的结果，拼接起来
    return now + '' + r;
  }


