import { STORE } from "./store.class";
import { useMemo, useEffect, useContext, Provider } from "react";
import { CONTEXT, ContextIns } from "./context.class";
import { useObservable } from ".";


interface StoreFactory<T> {
  useProvider() : [Provider<number>, number];
  useInjector<D>( stateName: keyof T, key?: number ) : [ D, (val: D) => void];
}

export function defineStoreFactory<T>(
  storeName: string, 
  initState: T = null
): StoreFactory<T>{

  // 用来提供store的hook 每调用一次就会创建一个新的同名store实例(可以有多个name相同的store，key才是store的唯一标识)
  function useProvider() : [Provider<number>, number] {
    let store = useMemo< STORE<T> >(
      () => new STORE<T>(storeName),
      []
    )  

    useEffect(() => {          
      for( let key in initState ) {
        store.set(key, initState[key as string])
      }
      return () => store.destroy();
    }, []);  
  
    let context = useMemo<ContextIns>(
      () => CONTEXT.gainContext(storeName),
      []
    ); 

    return [context.value.Provider, store.key]
  }

  // 用来注入store的hook，该hook会自动向外层组件找到store的上下文的key值
  function useInjector<D>(
    stateName: keyof T, key?: number
  ): [ D, (val: D) => void] {
    const ctx = CONTEXT.gainContext(storeName);
    const storeKey = key || useContext(ctx.value);
    const store = useMemo(
      () => {
        return STORE.findStoreByKey(storeKey);
      } ,
      [storeKey]
    )
  
    const value = useObservable<D>(store.get(stateName))
  
    return [
      value, 
      (val: D) => store.set(stateName, val)    
    ]
  }

  return {
    useProvider,
    useInjector
  }
}
