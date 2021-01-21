import Taro from '@tarojs/taro';
import { from, of, BehaviorSubject, ConnectableObservable } from 'rxjs';
import { switchMap, map, catchError, multicast } from 'rxjs/operators';

export const auth$ = 
  from( Taro.login() )
    .pipe(    
      switchMap( res => {
        console.log('code',res)
        return from(
                Taro.request({ method: 'POST', url:`/loginByThird`, data: {authCode: res.code, loginType:'wx'} })
              )
              .pipe( catchError( err => of({ data: { 'x-auth-token': 'none'}})))
      }),
      map( res => res.data['x-auth-token'] ),
      multicast( new BehaviorSubject<string>(null) )
    ) as ConnectableObservable<string>

auth$.connect()
