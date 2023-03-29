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

  constructor() { console.log(this.phrases) }

  ngOnInit() {

  }

}                   
