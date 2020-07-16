import React from 'react'
import { DynamicAnyObject } from 'cpocar-fe-utils-core'
import { View } from '@tarojs/components'

/**
 * 这个高阶组件中只要用View把WrappedComp包上， taro-demo-app中的Button就会渲染不出来
 * @param WrappedComp
 */
const withAny = (WrappedComp) => {
    return (props: DynamicAnyObject) => {
        return <View ><WrappedComp {...props} /></View>
    }
}

export default withAny
