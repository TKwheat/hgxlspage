import axios from 'axios';
import comReqHead from './commonReqHead';

//请求超时时间
// axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// 添加请求拦截器
axios.interceptors.request.use(function(config){
    return config
 },function(error){
   
 })
//  添加响应拦截器
axios.interceptors.response.use(function(response){
    return response.data
},function(error){
    
});

// 公共请求头
function comHead(key){
	var comReqHeads = comReqHead.request(key);
	return comReqHeads
};

function Get(url, params){
	return new Promise(function(resolve, reject){
		axios.get(url, params).then(function(res){
			resolve(res);
		}).catch(function(err){
			reject(err);
		})
	})
}

function Post(url,params,comHeadParams){
	// 每次的加密参数都可能不同
	axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
	let comParams = comHead(comHeadParams);
	comParams.userName = sessionStorage.getItem("userName")?sessionStorage.getItem("userName"):"";
	comParams.appReq = params;
	var token = sessionStorage.getItem("token");
	if(!token){
		return new Promise((resolve,reject)=>{
			axios.post(url,JSON.stringify(comParams)).then(res=>{
				resolve(res);
			}).catch(err=>{
				reject(err);
			});
		});
	}else{
		return new Promise((resolve,reject)=>{
			axios.post(url,JSON.stringify(comParams),{
				headers: {
					token: token
				}
			}).then(res=>{
				resolve(res);
				if(res.rtCode == "402"){
					console.log("token失效",res.rtMsg);
					window.location.href="http://localhost:8078";
					sessionStorage.clear();
				}
			}).catch(err=>{
				reject(err);
			});
		});
	}
}

function PagePost(url,params,comHeadParams){
	// 每次的加密参数都可能不同
	axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
	let comParams = comHead(comHeadParams);
	comParams.userName = sessionStorage.getItem("userName")?sessionStorage.getItem("userName"):"";
	comParams.appReq = params;
	comParams.pageSize = params.pageSize;
	comParams.pageNumber = params.pageNumber;
	var token = sessionStorage.getItem("token");
	if(!token){
		return new Promise((resolve,reject)=>{
			axios.post(url,JSON.stringify(comParams)).then(res=>{
				resolve(res);
			}).catch(err=>{
				reject(err);
			});
		});
	}else{
		return new Promise((resolve,reject)=>{
			axios.post(url,JSON.stringify(comParams),{
				headers: {
					token: token
				}
			}).then(res=>{
				resolve(res);
				if(res.rtCode == "402"){
					window.location.href="http://localhost:8078";
					sessionStorage.clear();
				}
			}).catch(err=>{
				reject(err);
			});
		});
	}
}
function Upload(url,params,progress){
	axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
	var token = sessionStorage.getItem("token");

    const data = new FormData();
    data.append('token', token);
    for(let key  in params){
    	if (key == "filelist") {
    		params[key].forEach((file,index) => {
    			data.append(index,file)
    		})
    	}else {
    		data.append(key,params[key])
    	}
	    
	}
	
	if(!token){
		return new Promise((resolve,reject)=>{
			axios.post(url,data).then(res=>{
				resolve(res);
			}).catch(err=>{
				reject(err);
			});
		});
	}else{
		return new Promise((resolve,reject)=>{
			axios({
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    },
                    url:url,
                    data: data,
                    method: 'post',
                    //上传进度
                    onUploadProgress:progress
                }).then(res=>{
				resolve(res);
				if(res.rtCode == "402"){
					console.log("token失效",res.rtMsg);
					window.location.href="http://localhost:8079";
					sessionStorage.clear();
				}
			}).catch(err=>{
				reject(err);
			});
		});
	}
}

function Download(url,params,progress){
	axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
	var token = sessionStorage.getItem("token");
    const data = new FormData();
    data.append('token', token);

    for(let key  in params){
	    data.append(key,params[key])
	}
    
	if(!token){
		return new Promise((resolve,reject)=>{
			axios.post(url,data).then(res=>{
				resolve(res);
			}).catch(err=>{
				reject(err);
			});
		});
	}else{
		return new Promise((resolve,reject)=>{
			axios({
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    },
                    url:url,
                    data: data,
                    method: 'post',
                    responseType: 'blob',
                    timeout: -1,
                    onDownloadProgress:progress
                }).then(res=>{
				resolve(res);
				if(res.rtCode == "402"){
					console.log("token失效",res.rtMsg);
					window.location.href="http://localhost:8079";
					sessionStorage.clear();
				}
			}).catch(err=>{
				reject(err);
			});
		});
	}
}
export default{
	Get,
	Post,
	PagePost,
	Upload,
	Download
}