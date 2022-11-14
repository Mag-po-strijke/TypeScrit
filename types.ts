const isFetching: boolean = true
const isLoading: boolean = false
let int: number = 42
let int2: number = 42.9
let int3: number = 7e5
const strLet: string = 'Hello'
const arrayLetNum: number[] = [3, 3, 1]
const arrayLetStr: Array<string> = ['f', 'j']
const contact: [string, number] = ['vlad', 80]
let variable: any = 82
variable = []
let func: Function = function (text: any = 'test'): void {
    console.log(text.toString())
}
let func2: Function = function (message: string): never {
    throw new Error(message)
}
let func3:Function = function inf(): never {
    while (true) {

    }
}
//My types
type Login = string
const login: Login = 'admin'
const login2: Login = 'admin'
type ID = string | number
const id: ID = 1234
const id2: ID = `1234`
type SomeType = string | null | undefined