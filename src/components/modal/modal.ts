import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';

class Modal extends RootComponent {
    _isOpen: boolean;
    button: Element;
    onClose: ()=> void;

    constructor(props: IRootComponent) {
        super(props);
        this._isOpen = false;
        this.onClose = () => {};
         
        this.button = this.findElement('close');
        this.button.addEventListener('click', () => {
            this.isOpen = false;
        });
    }

    set isOpen(value) {
        this._isOpen = value;
        if(!value) this.onClose();
        this.render();
    }


    render() {
        this.node.classList[this._isOpen ? 'add' : 'remove']('modal_open');
    }
}

export default Modal;