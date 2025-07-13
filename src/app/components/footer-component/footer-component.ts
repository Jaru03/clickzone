import { Component } from '@angular/core';
import { provideIcons, NgIcon } from '@ng-icons/core';
import { simpleFacebook, simpleInstagram, simpleX, simpleYoutube } from '@ng-icons/simple-icons';

@Component({
  selector: 'app-footer-component',
  imports: [NgIcon],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
  providers: [provideIcons({
    simpleYoutube,
    simpleFacebook,
    simpleInstagram,
    simpleX
  })]
})
export class FooterComponent {

}
