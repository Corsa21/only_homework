import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class Counter extends RootComponent {

    value: number;
    countElement: Element;
    decrementBtn: Element;
    incrementBtn: Element;

    constructor(props: IRootComponent) {
        super(props);

        this.countElement = this.findElement('value');
        this.value = parseInt(this.countElement.innerHTML);
        

        this.decrementBtn = this.findElement('decrement');
        this.incrementBtn = this.findElement('increment');

        this.incrementBtn.addEventListener('click', this.increment);
        this.decrementBtn.addEventListener('click', this.decrement);
    }

    render = () => {
        this.countElement.innerHTML = this.value.toString();
    };

    increment = ()=> {
        this.value++;
        this.render();
    };

    decrement = ()=> {
        this.value--;
        this.render();
    };
}

export default Counter;