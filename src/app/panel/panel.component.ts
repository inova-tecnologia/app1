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
  public response: string = ""; 
  public round: number = 0;
  public roundPhrase: PhraseModel;
  public progress: number = 0; 
  public attempts: number = 3;

  constructor() { 
      this.roundPhrase = this.phrases[this.round];
  }

  ngOnInit() {

  }      

  public updateResponse(response: Event): void {
      this.response = (<HTMLInputElement>response.target).value;
  } 

  public verifyResponse(): void {
      if(this.roundPhrase.phraseUS == this.response){
        this.round++;
        this.progress = this.progress + (100 / this.phrases.length);
        this.roundPhrase = this.phrases[this.round];
      }else{
        this.attempts--;
        this.attempts === -1 ? alert("You have used up all your attempts") : "";
      }
  }      
}                   
