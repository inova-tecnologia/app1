import { Component, Input, OnInit } from '@angular/core';
import { Heart } from '../shared/heart.model';
@Component({        
  selector: 'try-app',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})

export class TryComponent implements OnInit {

  public counter: boolean[] = [true,true,true];

  @Input() public attempts: number = 0;

  public hearts: Heart[] = [
    new Heart(this.counter[0]), 
    new Heart(this.counter[1]),     
    new Heart(this.counter[2])
  ]

  constructor() {
  
  }
  
  public check(): void {
      if(this.attempts === 2){
        this.counter[0] = false;
      }
      if(this.attempts === 1){
        this.counter[1] = false;
      }
      if(this.attempts === 0){
        this.counter[2] = false;
      }
  }

  ngOnInit() {
     this.check();
  }

}
