import { Component, EventEmitter, Output, OnDestroy, OnInit } from '@angular/core';
import { PhraseModel } from '../shared/phrase.model';
import { PhrasesMock } from './phrase-mock';

@Component({    
  selector: 'panel-app',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit, OnDestroy {

  public phrases: PhraseModel[] =  PhrasesMock;
  public instruction: string = "Translate the phrase:";
  public response: string = ""; 
  public round: number = 0;
  public roundPhrase: PhraseModel;
  public progress: number = 0; 
  public attempts: number = 3;
  @Output() public finishGame: EventEmitter<string> = new EventEmitter();

  constructor() { 
      this.roundPhrase = this.phrases[this.round];
  }

  ngOnDestroy() {
    
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
        this.round === 4 ? this.finishGame.emit('victory') : "";
        this.response = "";
      }else{
        this.attempts--;
        this.attempts === -1 ? this.finishGame.emit('defeat') : "";
        this.response = "";
      }
  }      
}                   
