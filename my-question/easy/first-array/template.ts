type First<T extends any[]> = T extends [infer R, ...infer Last] ? R : never
type First1<T extends any[]> = T extends [] ?  never : T[0] 
type res = First<[1,2,3]>