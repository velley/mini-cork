import './index.scss'
import bg from '../../assets/login_bg.png';
import { AtIcon } from 'taro-ui'

import React, { useEffect, useState } from 'react';
import { View, Text, Input, Image, OpenData } from '@tarojs/components';
import { AtButton } from 'taro-ui';

import { useHttpRequest } from '../../utils/useHttpReq.hook';
import { VerifyCode }from './verify-code';

const LOGIN_URL = 'http://www.api.com/login'

function BindPage() {  

  const [ phone, setPhone ]   = useState('')   
  const [ verify, setVerify ] = useState('')
  const [ res, submitLogin ] = useHttpRequest({url: LOGIN_URL, method:'POST', data:{phone, verify}})

  useEffect(
    () => {
      console.log('res',res)
    },
    [res]
  )
 
  return (
    <View className="wrapper">      
      <View className="top-user-info">
        <View className="avatar">
          <OpenData type="userAvatarUrl"></OpenData>        
        </View> 
        <View className="nick-name">
          <OpenData type="userNickName"></OpenData> 
        </View>
      </View>        
          
      <View className="form-container">
        <View className="input-box">
          <AtIcon className="icon" value='phone' size='25' color='#aaa'></AtIcon>
          <Input className="inputer" type='number' value={phone} onInput={ event => setPhone(event.detail.value) } />
        </View>  
        <View className="input-box">
          <AtIcon className="icon" value='lock' size='23' color='#aaa'></AtIcon>
          <Input className="inputer" type='text' value={verify} onInput={ event => setVerify(event.detail.value)} />
          <VerifyCode></VerifyCode>
        </View>
      </View>
      <AtButton className="submitter" type='primary' circle onClick={ e => submitLogin() }>提交</AtButton>
    </View>
  )
}

export default BindPage 