import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private mir: MatIconRegistry, sanitizer: DomSanitizer) {
    mir.addSvgIcon('add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-add_box-24px.svg'));
  }
  title = 'ollert';
}
