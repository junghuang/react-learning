import {
  INCREAMENT,
  DECREAMENT,
  ADDNUMS,
  SUBNUMS
} from './constants.js'

export const incAction = () => ({
  type: INCREAMENT
})

export const decAction = () => ({
  type: DECREAMENT
})

export const addAction = (num) => ({
  type: ADDNUMS,
  num
})

export const subAction = (num) => ({
  type: SUBNUMS,
  num
})

// export const s = () => {
//   return {
//     type:kkk
//   }
// }
