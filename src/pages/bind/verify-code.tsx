import React, { useEffect, useState } from 'react';
import { View, Text, Input, Image, OpenData } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { useHttpRequest } from '../../utils/useHttpReq.hook';

// const LIMIT_SECOND = 60 

function VerifyCode() {

  const [ countDown, setCount ] = useState()
  const [ codeInfo, getCode ] = useHttpRequest<any, any>({ url:'/getcode', method: 'GET'})

  return (
    <AtButton onClick={ e => getCode() }>
      { !countDown ? '获取验证码' : `${countDown}s重试` }
    </AtButton>
  )
} 

export { VerifyCode }