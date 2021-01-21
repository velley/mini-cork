import './styles/index.scss';

import React, { useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { Banner } from './banner'

import { useHttpRequest } from '../../utils/useHttpReq.hook';
import { Menus } from './menus';

function HomePage() {  
  
  return (
    <View className="home grey-page">
      <Banner></Banner>
      <Menus></Menus>
    </View>
  )
}

export default HomePage