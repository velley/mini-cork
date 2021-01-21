import React, { useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';

import { useHttpRequest } from '../../utils/useHttpReq.hook';


function UserPage() {  
 
  return (
    <View>
      用户页
    </View>      
  )
}

UserPage.config = {
  navigationBarTitleText: '首页'
}

export default UserPage