export interface devzolo {
  id: string;
  nome: string;
  cpf: string;
}

export interface outroInter {
  nome: string;
  cpf: string;
}

type outroInterface = outroInter & idSetter;

export interface idSetter {
  id: string;
}

const test: outroInterface = {};
