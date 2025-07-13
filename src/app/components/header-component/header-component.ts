import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroHeartMicro, heroMagnifyingGlassMicro, heroShoppingCartMicro, heroUserMicro } from '@ng-icons/heroicons/micro';

@Component({
  selector: 'app-header-component',
  imports: [NgIcon],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
  providers: [provideIcons({heroMagnifyingGlassMicro, heroShoppingCartMicro, heroHeartMicro, heroUserMicro })]
})
export class HeaderComponent {

}
