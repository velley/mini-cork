import { defineStoreFactory } from '../../store/store.factory';

interface DemoStore {
  age: string,
  sex: string,
  num: number
}

export const demo = defineStoreFactory<DemoStore>('demo', {
  age:'12',
  sex: 'man',
  num: 1
})

interface HomeStore {
  pages: number;
  components: number;
}

export const home = defineStoreFactory<HomeStore>('home', {
  pages: 999,
  components: 10
})