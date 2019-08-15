import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Daniel';

  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  porciento = 0.23;

  dinero = 55436.4122;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      numero: '12'
    }
  };

  valorDePromesa = new Promise(( resolve, reject) => {

    setTimeout( ()=>resolve('Llegó la data!'), 5000 );
 })

}
