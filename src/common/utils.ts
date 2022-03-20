import { IRootComponent } from '@common/types';

export const findComponent = <T extends Element = Element>(
    name: string,
    root?: Element
): IRootComponent<T> => ({
    name,
    node: (root ? root : document).querySelector(`.${name}`),
});

export const findComponents = <T extends Element = Element>(
    name: string,
    root?: Element
): IRootComponent<T>[] =>
    Array.from((root ? root : document).querySelectorAll(`.${name}`)).map((node: T) => ({
        name,
        node,
    }));
