import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hlynur Stefánsson';

  constructor() { }

  goToGithub() {
    window.open('https://github.com/hlynurstef');
  }

  gotToFacebook() {
    window.open('https://www.facebook.com/hlynurstef');
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/hlynurstef/');
  }

  mailTo() {
    // Doesn't open a new window
    window.location.href = 'mailto:hlynurstef@gmail.com';
  }
}
