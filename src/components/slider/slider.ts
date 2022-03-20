import RootComponent from '@common/rootComponent';
import { IRootComponent } from '@common/types';
import { findComponents } from '@common/utils';
import Counter from '@components/counter/counter';
import Swiper, { Navigation } from 'swiper';


class Slider extends RootComponent {

    swiper: Swiper;
    counters: Counter[];

    constructor(props: IRootComponent) {
        super(props);
        console.log(this.node);

        this.swiper = new Swiper(this.node as HTMLElement,{
            modules: [Navigation],
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        });


        this.counters = findComponents('counter', this.node).map(component => new Counter(component));
    }

}

export default Slider;