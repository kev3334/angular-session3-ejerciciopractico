import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AppModulos';
  public cards:Array<any> =[];
  ngOnInit(): void {
    this.cards=[
      {
        title:'Libre',
        precio:'0',
        usuarios:'10',
        almacenamiento:'2',
        soporte:'Soporte de correo electrónico',
        acceso:'Acceso al centro de ayuda',
        boton:'Registrate gratis'
      },
      {
        title:'Pro',
        precio:'15',
        usuarios:'20',
        almacenamiento:'10',
        soporte:'Soporte prioritario por correo electrónico',
        acceso:'Acceso al centro de ayuda',
        boton:'Empezar'
      },
      {
        title:'Empresa',
        precio:'29',
        usuarios:'30',
        almacenamiento:'15',
        soporte:'Soporte telefónico y por correo electrónico',
        acceso:'Acceso al centro de ayuda',
        boton:'Contáctenos'
      }
    ];
  }


  
}
