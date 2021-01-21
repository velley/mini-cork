import React, { useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';

import { useHttpRequest } from '../../utils/useHttpReq.hook';


function SharePage() {  
 
  return (
    <View>
      分享页
    </View>      
  )
}

SharePage.config = {
  navigationBarTitleText: '首页'
}

export default SharePage