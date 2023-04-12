import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Heart } from '../shared/heart.model';
@Component({        
  selector: 'try-app',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})

export class TryComponent implements OnInit, OnChanges {

  @Input() public attempts: number = 0;

  public hearts: Heart[] = [
    new Heart(true), 
    new Heart(true),     
    new Heart(true)
  ] 

  constructor() {
  
  }
  
  public check(): void {
      if(this.attempts !== this.hearts.length){
          let index = this.hearts.length - this.attempts;
          this.hearts[index - 1].full = false;
      }
  }

  ngOnChanges(){
      this.check();
  }

  ngOnInit() {
     
  }

}
