import { IView, IViewData } from '@barba/core';

import { findComponent } from '@common/utils';
import MainComponent from '@components/mainComponent/mainComponent';

export default {
    namespace: 'index',
    beforeEnter(data: IViewData) {},
    afterEnter(data: IViewData) {
        const mainComponent = new MainComponent(findComponent('mainComponent'));
    },
} as IView;
