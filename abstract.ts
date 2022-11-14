abstract class Componetnt {
    abstract render(): void
    abstract info():string
}
class AppCommponent extends Componetnt{
    render(): void {
        console.log('Render something');
        
    }
    info(): string {
        return 'Some info'
    }
}
