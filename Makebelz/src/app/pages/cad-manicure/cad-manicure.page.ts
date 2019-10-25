import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { CrudService } from '../../services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cad-manicure',
  templateUrl: './cad-manicure.page.html',
  styleUrls: ['./cad-manicure.page.scss'],
})
export class CadManicurePage implements OnInit {

  constructor(
    private crudService: CrudService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  private  isSalao = false;
  private isCasa = false;
  private re = {
    name: '',
    end_bairro: '',
    end_cidade: '',
    end_numero: '',
    end_rua: '',
    phone: '',
    type: 'Manicure',
    casa: false,
    salao: false,
  };

  ngOnInit() {}

  toogleCasa()
  {
    this.isCasa = !this.isCasa;
    this.re.casa = this.isCasa;
  }

  toogleSalao()
  {
    this.isSalao = !this.isSalao;
    this.re.salao = this.isSalao;
  }

  async register() {
    try {
      
      let usuario = {};

      if(this.isSalao == true){
        usuario['Name'] = this.re.name;
        usuario['Bairro'] = this.re.end_bairro;
        usuario['Cidade'] = this.re.end_cidade;
        usuario['Numero'] = this.re.end_rua;
        usuario['Rua'] = this.re.end_numero;
        usuario['Phone'] = this.re.phone;
        usuario['Type'] = this.re.type;
        usuario['Casa'] = this.re.casa;
        usuario['Salao'] = this.re.salao;
      }
      else{
        usuario['Name'] = this.re.name;
        usuario['Phone'] = this.re.phone;
        usuario['Type'] = this.re.type;
        usuario['Casa'] = this.re.casa;
        usuario['Salao'] = this.re.salao;
      }
      

      this.crudService.create_NewStudent(usuario,firebase.auth().currentUser.uid).then(resp => {
      console.log(usuario);
      })
      this.router.navigate(['../home'],{relativeTo:this.activatedRoute})
      
    } catch (error) {
      console.log("DEU RUIM");
      console.log(error);
    } 

  }

}
