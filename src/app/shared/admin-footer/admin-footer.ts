import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';

@Component({
    selector: 'app-admin-footer',
    templateUrl: './admin-footer.html',
    styleUrls: ['./admin-footer.scss']
})
export class AdminFooter extends FooterComponent {
  constructor() {
    super();
  }
}
