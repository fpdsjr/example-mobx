import { makeAutoObservable } from 'mobx';

export function store<T extends object>(obj: T) {
  const store = makeAutoObservable(
    obj,
    {},
    {
      autoBind: true,
    },
  );

  return store;
}
