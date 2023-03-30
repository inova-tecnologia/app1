import { Component } from '@angular/core';
import { PhraseModel } from '../shared/phrase.model';
import { PhrasesMock } from './phrase-mock';
@Component({ 
  selector: 'panel-app',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
    
  public phrases: PhraseModel[] =  PhrasesMock;
  public instruction: string = "Translate the phrase:";
  response1: string = "";

  constructor() { console.log(this.phrases) }

  ngOnInit() {

  }      

  public updateResponse(response: Event): void {
      this.response1 = (<HTMLInputElement>response.target).value;
      console.log((this.response1));
  } 

  public verifyResponse(): void {
      console.log('Verificar resposta: ', this.response1);
  }    

}                   
