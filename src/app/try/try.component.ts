import { Component } from '@angular/core';

@Component({        
  selector: 'try-app',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent {
  public emptyHeart: string = "../assets/emptyHeart.png";
  public fullHeart: string = "../assets/fullHeart.png";
}
