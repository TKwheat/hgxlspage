import md5 from 'js-md5'
// 获取时间
function formatTime(date) {
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	var day = date.getDate()
	var hour = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()
	return [year, month, day].map(formatNumber).join('') + [hour, minute, second].map(formatNumber).join('')
}

// 获取随机数
function formatNumber(n) {
	n = n.toString()
	return n[1] ? n : '0' + n
}
function request(e){
	let key = e?e:"";
	var headData = {};
	var randomNum = Math.floor(Math.random() * 100000000);
	var nowDate = formatTime(new Date());
	var signReq = md5(randomNum + nowDate + key + "zhongwei");
	
	headData["reqId"] = randomNum;
	headData["reqTime"] = nowDate;
	headData["signReq"] = signReq;
	
	return headData
}
export default{
	request
}