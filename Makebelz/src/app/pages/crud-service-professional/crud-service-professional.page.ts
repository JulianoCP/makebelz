import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crud-service-professional',
  templateUrl: './crud-service-professional.page.html',
  styleUrls: ['./crud-service-professional.page.scss'],
})
export class CrudServiceProfessionalPage implements OnInit {

  constructor(
    public route: Router,
    public activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  view(){
    
  }

  edit() {
    this.route.navigate(['./editServicos'], { relativeTo: this.activatedRouter });
  }


}
