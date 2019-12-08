import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
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

      usuario['Name'] = this.re.name;
      usuario['Phone'] = this.re.phone;
      usuario['Casa'] = this.re.casa;
      usuario['Salao'] = this.re.salao;

      if(this.isSalao == true){
        usuario['Bairro'] = this.re.end_bairro;
        usuario['Cidade'] = this.re.end_cidade;
        usuario['Numero'] = this.re.end_rua;
        usuario['Rua'] = this.re.end_numero;
      }

      this.crudService.create(usuario, firebase.auth().currentUser.uid,'Manicure').then(resp => {
        console.log(usuario);
        this.router.navigate(['../../../home'], { relativeTo: this.activatedRoute });

      });
      // this.router.navigate(['../home'],{relativeTo:this.activatedRoute});

    } catch (error) {
      console.log("DEU RUIM");
      console.log(error);
    }

  }

}
