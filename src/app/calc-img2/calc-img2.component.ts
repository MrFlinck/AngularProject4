import { Component } from '@angular/core';

@Component({
  selector: 'app-calc-img2',
  templateUrl: './calc-img2.component.html',
  styleUrl: './calc-img2.component.css'
})


export class CalcIMG2Component {
  peso = " ";
  altura = " "; 
  resposta = " "; 
  resultado = 0
  togglar = false 
  
    
  click2(){
      
    this.togglar= !this.togglar
   
  }




  IMC(){
    const peso = Number(this.peso)
    const altura = Number(this.altura)
    this.resultado = Number(peso)/Math.pow(Number(altura), 2) 
    this.togglar= !this.togglar
    

    
    

    
    
    

    if( this.resultado > 0 && this.resultado <= 18.5 ){
      this.resposta = "a"  
    }
    else if(this.resultado >= 18.5 && this.resultado <= 24.9){
      this.resposta = "b"
    }
    else if(this.resultado >= 25 && this.resultado <= 29.9){
      this.resposta = "c"

    }
    else if(this.resultado >= 30 && this.resultado <= 34.9){
      this.resposta = "d"

    }
    else if(this.resultado >= 35 && this.resultado <= 39.9){
      this.resposta = "e"
      
    }
    else if(this.resultado >= 40){
      this.resposta = "f"
      
    }
    
  }

  
}
