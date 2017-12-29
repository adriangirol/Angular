import { Injectable } from '@angular/core';

@Injectable()
export class PeoplesService {

  private Peoples: People[] = [
    {
      nombre: "Aniceto",
      apellidos: "Girol Barragán",
      img: "assets/img/men.png",
      categoria: "Padre",
      sexo:"Hombre"
    },
    {
      nombre: "Rocio",
      apellidos: "Montes Bermejo",
      img: "assets/img/woman.png",
      categoria: "Madre",
      sexo:"Mujer"
    },
    {
      nombre: "Manuel",
      apellidos: "Girol Montes",
      img: "assets/img/men.png",
      categoria: "Herman@",
      sexo:"Hombre"
    },
    {
      nombre: "Elisabeth",
      apellidos: "Calvo Garcia",
      img: "assets/img/woman.png",
      categoria: "Novi@",
      sexo:"Mujer"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar !!!");
   }

   getPeoples(){
       return this.Peoples;
   }

   getPeople : People( i: string){

     return this.Peoples[i];
   }

   putPeople : number(newPeople : People, i: string){
     this.Peoples[i] = newPeople;
     return 0;
   }

   buscarPeople : People[] ( termino: string){
     //console.log("en service")
     let PeoplesArr:People[] = [];
     termino = termino.toLowerCase();

     for(let item of this.Peoples ){
       let nombre = item.nombre.toLowerCase();
       if(nombre.indexOf(termino) >= 0 ){
         PeoplesArr.push(item);
       }

     }
     return PeoplesArr;
   }

   setPeople : number(people : People) {
       let numberPeople = this.Peoples.lenght;

       this.Peoples.push(people);

       if(numberPeople == this.Peoples.lenght)
       {

         return 0;

       }else{

         return 1;

       }

   }

   deletePeople : number(id: number){
    this.Peoples.splice(id,1);
    return 0;
   }

}

export class People {

  nombre:String;
  apellidos:String;
  img:String;
  categoria:String;
  sexo:String;

  constructor(public nombre:string,public apellidos : string ,public img: string ,public categoria : string ,public sexo : string){
    console.log("Estoy en constru");
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.img = img;
      this.categoria = categoria;
      this.sexo = sexo;
  }
}
