type TupleToObject<T extends readonly (string | number)[]> = {
  [P in keyof T[number]]: P
}
// --------------------演示-------------------------
const tuple1 = ['tesla', 'model 3', 'model X', 'model Y'] as const
type result = TupleToObject<typeof tuple1> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}


//---------------

/**
 *  typeOf 从js世界转到TS类型世界 
 * 
 * */ 