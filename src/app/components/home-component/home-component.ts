import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroChatBubbleLeftRightMicro,
  heroCheckBadgeMicro,
  heroCreditCardMicro,
  heroTruckMicro,
} from '@ng-icons/heroicons/micro';
import{simpleApple, simpleDell, simpleGoogle, simpleHonor, simpleHp, simpleLenovo, simpleRedragon, simpleSamsung, simpleXiaomi} from "@ng-icons/simple-icons"

@Component({
  selector: 'app-home-component',
  imports: [NgIcon],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
  providers: [
    provideIcons({
      heroTruckMicro,
      heroCheckBadgeMicro,
      heroChatBubbleLeftRightMicro,
      heroCreditCardMicro,
      simpleApple,
      simpleDell,
      simpleHp,
      simpleLenovo,
      simpleXiaomi,
      simpleSamsung,
      simpleGoogle,
      simpleHonor,
      simpleRedragon
    }),
  ],
})
export class HomeComponent {
  ultimosProductos = [
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
  ];
  productosPopulares = [
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
    { titulo: 'Titulo', description: "descripcion del producto", price: 600, calificacion: "5/5", img: "producto1.png" },
  ];
}
