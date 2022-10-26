import { autorun, makeAutoObservable } from 'mobx';

export class HomeScreenStore {
  count = 0;
  nome = 'parede'

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      },
    );

    autorun(() => {
      console.log('autorun', this.nome);
    })
  }

  public increment() {
    this.incrementeIpl();
  }

  private incrementeIpl() {
    this.count++;
  }

  public changeName() {
    this.nome = 'ninuj'
  }
}

export const homeStore = new HomeScreenStore();