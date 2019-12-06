import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-crud-service-professional',
  templateUrl: './crud-service-professional.page.html',
  styleUrls: ['./crud-service-professional.page.scss'],
})
export class CrudServiceProfessionalPage implements OnInit {

  private readonly _profile = new BehaviorSubject<any>([]);
  readonly profile$ = this._profile.asObservable();

  constructor(
    public route: Router,
    public activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  view()
  {
    this.route.navigate(['./viewServicos'], { relativeTo: this.activatedRouter });
  }

  edit() {
    this.route.navigate(['./editServicos'], { relativeTo: this.activatedRouter });
  }


}
