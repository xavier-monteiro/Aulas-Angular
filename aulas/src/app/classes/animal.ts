export class Animal {

  nome : string = "";
  nomeDono : string = "";
  especie : string = "";
  imagemAnimal : string = "";
  dataProximaConsulta : Date | null = null;

  constructor(nome : string, dono: string,especie: string,imagem:string)
  {
    this.nome = nome;
    this.nomeDono = dono;
    this.especie = especie;
    this.imagemAnimal = imagem;
  }
}
