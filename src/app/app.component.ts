import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public clases = [
    {
      ruta: '/brujo',
      imageURL:'/assets/icon/brujo.png',
      nombre: 'Brujo'
    },
    {
      ruta: '/dk',
      imageURL:'/assets/icon/dk.png',
      nombre: 'Caballero de la Muerte'
    },
    {
      ruta: '/cazador',
      imageURL:'/assets/icon/cazador.png',
      nombre: 'cazador'
    },
    {
      ruta: '/dh',
      imageURL:'/assets/icon/dh.png',
      nombre: 'Cazador de Demonios'
    },
    {
      ruta: '/chaman',
      imageURL:'/assets/icon/shaman.png',
      nombre: 'chamán'
    },
    {
      ruta: '/druida',
      imageURL:'/assets/icon/druida.png',
      nombre: 'Druida'
    },
    {
      ruta: '/guerrero',
      imageURL:'/assets/icon/guerrero.png',
      nombre: 'Guerrero'
    },
    {
      ruta: '/mago',
      imageURL:'/assets/icon/mago.png',
      nombre: 'Mago'
    },
    {
      ruta: '/monje',
      imageURL:'/assets/icon/monje.png',
      nombre: 'Monje'
    },
    {
      ruta: '/paladin',
      imageURL:'/assets/icon/paladin.png',
      nombre: 'Paladin'
    },
    {
      ruta: '/picaro',
      imageURL:'/assets/icon/picaro.png',
      nombre: 'Picaro'
    },
    {
      ruta: '/saserdote',
      imageURL:'/assets/icon/saser.png',
      nombre: 'Sacerdote'
    },
  ]




  constructor() {}
}
