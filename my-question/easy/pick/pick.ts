interface Todo  {
  title: string
  description: string
  completed: boolean
}
type MyPick<T,K extends keyof T> = {
  [P in K]: T[P]
}
type TodoView = MyPick<Todo, 'title'| 'completed'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

let todoPick: TodoPreview = {
    title: 'Clean room',
    completed: false,
}