import { LayoutService } from './../../layout/layout.service';
import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from '../../Auth/localStorageLogin/local-storage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  category: any[] = [];
  displayBasic: boolean;

  constructor(private service: LayoutService,
    public localStorage: LocalStorageService) {}

    ngOnInit(): void {

    this.service.getAllCategory().subscribe((response) => {
      if (response['success'] === true) {
        this.category = response['data'];
      }
    });

  }
}
