import { Component } from '@angular/core';

@Component({
  selector: 'app-hedaer',
  templateUrl: './hedaer.component.html',
  styleUrls: ['./hedaer.component.css']
})
export class HedaerComponent {

  // a: string = "hello evryone";
  // img: string = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  // newB: string = "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1894&q=80"

//   x = 0;
//   y = 0;
//   result = 0;

//   set1no(e: any) {
//     this.x = e.traget.value;

//   }

//   set2no(p: any) {
//     this.y= p.traget.value;

//   }

//   add() {
//     this.result = Number(this.x) + Number( this.y);
//     return (this.result);
//  }
x=null;
y=0;
result=0;



// p:boolean=false;
// age=15;


set1(z:any)
{
this.x=z.target.value
// Number(this.x)

}
set2(w:any)
{
this.y=w.target.value
// Number(this.y)
}
add()
{
  // return(this.x+this.y);
  this.result=Number(this.x) +Number(this.y)
  // console.log(this.x+this.y)
  return(this.result)
  
}

sub(){
  this.result=Number(this.x)-Number(this.y);
  return(this.result)
}
multy(){
  this.result=Number(this.x)*Number(this.y);
  return(this.result)

}
divide(){
  this.result=Number(this.x)/Number(this.y);
  return(this.result)

}

age:number=0;


  findage(e:any){
    
 
    if(birthdate){
      var birthdate=e.target.value;
      var timeDiff = Math.abs(Date.now() - birthdate().gettime());
       this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);

      console.log (this.age); 

    }
     }

    }    
