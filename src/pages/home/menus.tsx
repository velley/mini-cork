import './styles/menu.scss'

import React from 'react';
import { View } from '@tarojs/components';

function Menus() {

  const menuList = ['水果','蔬菜']

  return (
    <View className="menu-container">
      {
        menuList.map( (item, index) => (
          <View className="menu-item" key={index}>{item}</View>
        ))
      }
    </View>
  )
}

export { Menus }