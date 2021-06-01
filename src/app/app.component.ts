import { NgxSpinnerService } from 'ngx-spinner';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'jahanteb-app';
  constructor(private spinner: NgxSpinnerService) {}
  ngOnInit() {
    this.spinner.hide().then(r =>console.log(r) );

    setTimeout(() => {
      /** spinner ends after 3 seconds */
      // this.spinner.hide().then(r =>console.log(r) );
    }, 1000);
  }
}
