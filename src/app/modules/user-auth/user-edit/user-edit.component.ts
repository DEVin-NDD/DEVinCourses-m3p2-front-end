import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pro-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  myimage: any;

  nomeCompleto: string = 'A B C';
  email: string = 'admin@admin.com';
  cpf: string = '123456789';
  idade: number = 30;
  readOnly: boolean  = true;

  constructor() { }

  ngOnInit(): void {
  }

}
