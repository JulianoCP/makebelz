import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { CrudService } from '../../services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.page.html',
  styleUrls: ['./cad-cliente.page.scss'],
})
export class CadClientePage implements OnInit {

  constructor(
    private crudService: CrudService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  private re = {
    name: '',
    end_bairro: '',
    end_cidade: '',
    end_numero: '',
    end_rua: '',
    phone: '',
  };

  ngOnInit() {}

  async register() {
    try {
      
      let usuario = {};

      usuario['Name'] = this.re.name;
      usuario['Bairro'] = this.re.end_bairro;
      usuario['Cidade'] = this.re.end_cidade;
      usuario['Numero'] = this.re.end_rua;
      usuario['Rua'] = this.re.end_numero;
      usuario['Phone'] = this.re.phone;

      this.crudService.create_Usuario(usuario,firebase.auth().currentUser.uid,'Cliente').then(resp => {
      console.log(usuario);
      })
      this.router.navigate(['../home'],{relativeTo:this.activatedRoute})
      
    } catch (error) {
      console.log("DEU RUIM");
      console.log(error);
    } 

  }

}
