import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public formulario;
  public nome;
  public cpf;
  public celular;
  public email;
  public senha;
  public confirmarsenha;
  public datan;
  public genero;
  public mensagem;
  
  public salvar (){
    this.formulario = this.nome;
    this.formulario = this.cpf;
    this.formulario = this.celular;
    this.formulario = this.email;
    this.formulario = this.senha;
    this.formulario = this.datan;
    this.formulario = this.genero;
    this.formulario = this.confirmarsenha;
  
    if (this.formulario == null){
      this.mensagem = "NÃO FOI POSSÍVEL REALIZAR O CADASTRO!";

    }
    else {
      this.mensagem = "CADASTRO REALIZADO COM SUCESSO!";
    }
  }

  public apagar (){
    this.email = null;
    this.senha = null;
    this.mensagem = null;
    this.nome = null;
    this.cpf = null;
    this.celular = null;
    this.confirmarsenha = null;
   this.datan = null;
   this.genero = null;
  
  }

}
