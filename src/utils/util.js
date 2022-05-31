
// list需要分页的数组，pagenum当前页，pagesize每页的大小
function cutPage(list,pagenum=1,pagesize=10){
	let resList = [];
	let from = ((pagenum - 1) * pagesize) +1;
    let to = pagenum * pagesize;
    list.forEach((item,index)=>{
    	if (((index + 1) >= from) && (index+1 <= to)) {
    		resList.push(item)
    	}
    })
    return resList
}

// 提取htnl中的文字部分
function trimHtml(str){
    str = str.replace(/(\n)/g, "");
    str = str.replace(/(\t)/g, "");
    str = str.replace(/(\r)/g, "");
    str = str.replace(/<\/?[^>]*>/g, "");
    str = str.replace(/\s*/g, "");
    str = str.replace(/<[^>]*>/g,"");
    return str;
}

// 根据时间返回当前时间字符串
function traTime(date){
    let dateArr = date.toLocaleDateString().split("/");
    let year = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];
    if (month.length == 1) {
        month = "0"+month
    }
    if (day.length == 1) {
        day = "0"+day
    }
    
    return year+'-'+month+'-'+day;
}

// 根据时间返回当前时间字符串
function thisMonTime(nowTemp){
    var oneDayLong = 24*60*60*1000 ;//一天的毫秒数
    var c_time = nowTemp.getTime() ;//当前时间的毫秒时间
    var c_day = nowTemp.getDay()||7;//当前时间的星期几
    var m_time = c_time - (c_day-1)*oneDayLong;//当前周一的毫秒时间
    var monday = new Date(m_time);//设置周一时间对象
    
    return monday;
}

// 把数字转换为时间
function numToTime(num){
    let res = "00:00"
    res = num+":"+"00"
    if (num < 10) {
        res = "0"+num+":"+"00"
    }
    return res;
}

// 返回字符串每个字符的数组
function stringArr(string){
    let res = [];
    for(let char of string){
        res.push(char)
    };
    return res;
}

// 处理邮件数据
function resToTableData(data) {
  // 对象化json数据
  if (data.length == 0) {
    return []
  }
  let resDate = JSON.parse(data)
  let links = resDate.link
  let times = resDate.times
  let Keywords = resDate.translateKeywords.trans_result
  let Title = resDate.translateResTitle.trans_result
  let tableData = []
  for (let i = 0; i < links.length; i++) {
      tableData.push({
        links:links[i],
        times:times[i],
        Keywords:Keywords[i].src,
        trans_Keywords:Keywords[i].dst,
        Title:Title[i].src,
        trans_Title:Title[i].dst
      })
  }
  console.log(tableData);
  return tableData
}


function pathToTree(input) {
  let treeDTO = [];
  let array = [];
  console.log("开始");
  input.forEach((item) => {
    array.push(item.node_path)
  })

  array.map((item) => {
    let key = item;
    let nodeArray = key.split('/');
    // 递归
    let children = treeDTO;
    // 构建根节点
    if (children.length == 0) {
        let root = {
            key: nodeArray[0]
        };
        if (nodeArray.length > 1) {
            root.children = [];
        }
        children.push(root);
    } else {
        // 循环构建子节点
        for (let i in nodeArray) {
            let node = {
                key: nodeArray[i]
            };
            if (i != nodeArray.length) {
                node.children = [];
            }
            if (children.length == 0) {
                children.push(node);
            }
            let isExist = false;
            for (let j in children) {
                if (children[j].key == node.key) {
                    if (i != nodeArray.length - 1 && !children[j].children) {
                        children[j].children = [];
                    }
                    children = (i == nodeArray.length - 1 ? children : children[j].children);
                    isExist = true;
                    break;
                }
            }
            if (!isExist) {
                children.push(node);
                if (i != nodeArray.length - 1 && !children[children.length - 1].children) {
                    children[children.length - 1].children = [];
                }
                children = (i == nodeArray.length - 1 ? children : children[children.length - 1].children);
            }
        }
    }
  });

  return treeDTO;
}




export default{
    trimHtml,
	  cutPage,
    traTime,
    thisMonTime,
    numToTime,
    stringArr,
    resToTableData,
    pathToTree
}