interface Rect {
    readonly id: number,
    color?: string,
    size: {
        width: number,
        height: number
    }
}
const firstRect1: Rect = {
    id: 123,
    color: '#892084',
    size: {
        width: 80,
        height: 90
    }
}
const fecondRect2: Rect = {
    id: 121,
    color: `#243872`,
    size: {
        width: 80,
        height: 90
    }
}
const thirdRect3 = {} as Rect/*or <Rect>{} */
// firstRect.id = 90
//===============================================
interface IRectArea extends Rect {
    getArea: () => number
}
interface Styles  {
    [key: string]: string
}
const fifthRect5: IRectArea = {
    id: 123,
    size: {
        width: 90,
        height: 80
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}
class rect6Six implements IRectArea {
    getArea(): number {
        return this.size.width * this.size.height
    }
    id: 123
    size: { width: 90; height: 80 }
}
//===============================================
