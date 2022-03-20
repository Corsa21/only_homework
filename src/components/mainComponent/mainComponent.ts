import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';
import { findComponent } from '@common/utils';
import Slider from '@components/slider/slider';
import Modal from '@components/modal/modal';
import Swiper from 'swiper';

class MainComponent extends RootComponent {

    slider: Slider;
    modal: Modal;
    button: Element;
    valueElement: Element;

    constructor(props: IRootComponent) {
        super(props);
        this.modal = new Modal(findComponent('modal'));
        this.slider = new Slider(findComponent('slider'));

        this.button = this.findElement('button');
        this.button.addEventListener('click', ()=>{
            this.modal.isOpen = true;
        });

        this.valueElement = this.findElement('value');


        this.slider.swiper.on('slideChange', this.setCurrentValue);

        this.modal.onClose = this.setCurrentValue;

        this.setCurrentValue();
        
    }

    setCurrentValue = () => {
        const activeIndex = this.slider.swiper.activeIndex;
        const value = this.slider.counters[activeIndex].value.toString();
        this.valueElement.innerHTML = value;
    };
}

export default MainComponent;