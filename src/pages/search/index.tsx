import React, { useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';

import { useHttpRequest } from '../../utils/useHttpReq.hook';


function SearchPage() {  
 
  return (
    <View>
      搜索页
    </View>      
  )
}

SearchPage.config = {
  navigationBarTitleText: '首页'
}

export default SearchPage