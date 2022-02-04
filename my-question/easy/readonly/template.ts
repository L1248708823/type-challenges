  type MyReadonly<T> = {
    readonly [P in keyof T]:  T[P]
  }
  //--------------演示---------
  interface TodoReadonly {
    title: string
    description: string
  }

  const todoReadonly: MyReadonly<TodoReadonly> = {
    title: "Hey",
    description: "foobar"
  }

  todoReadonly.title = "Hello" // Error: cannot reassign a readonly property
  todoReadonly.description = "barFoo" // Error: cannot reassign a readonly property
  /**
   * in 遍历接口   
   * in ==>keyof ==> lookup
  */