import Taro from '@tarojs/taro';
import { useState } from 'react'
import { from } from 'rxjs';
import { useObservable } from '../store';
import { auth$ } from '../auth';

interface HttpMsg {
    loading?: string | undefined;
    success?: string | undefined;
    failed?:  string | undefined;
}

interface HttpParams<ReqData> {
    url: string;    
    method: 'POST' | 'GET' | 'PUT' | 'DELETE';
    data?: ReqData;
    msg?:HttpMsg;
}

// interface HttpResponse<Body> {    
//     statusCode: number;
//     cookies: string[];
//     errMsg: string;
//     data: Body
// }

type StatusType = 'success' | 'failed' | 'error' | 'unauth'

const checkResStatus = (statusCode: number, msg: HttpMsg = {}) => {
    let message: string;
    let statusType: StatusType;
    switch(statusCode) {
      case 200:
          statusType = 'success'
          message = msg.success
      break;
      case 404:
          message = '请求失败，请检查您的网络设置'
          statusType = 'error'
      break;
      case 500:
          message = '服务器内部错误，请稍后再试'
          statusType = 'error'
      break;
      case 503:
          message = '请求超时，请稍后再试'
          statusType = 'error'
      case 401:
          message = '您的身份验证已过期，请退出重试'
          statusType = 'failed'
      break;
    }
    if(statusType === 'success') return
    Taro.showToast({ title: message, icon: 'none'})
}

export function useHttpRequest<T, R>(params: HttpParams<T>): [R, () => void, boolean] {
    
    const [lodingState, setLoading] = useState(false)    
    const [resData, setResData]     = useState<R>(null)    
    const authToken                 = useObservable(auth$)

    const request = () => {     
      const { url, method, msg } = params
      if(msg && msg.loading) Taro.showLoading({title: msg.loading})
      setLoading(true)
      const reqs = Object.assign({url, method}, {data: params.data}, {header: {'x-auth-token': authToken}})       
      from(Taro.request(reqs))
        .subscribe( (res: any) => {    
          console.log(res)            
          setResData(res.data)     
          setLoading(false)  
        }, console.log, () => {
          setLoading(false)
          Taro.hideLoading()
        }) 
    }        

    return [
      resData,
      request,
      lodingState
    ] 
}