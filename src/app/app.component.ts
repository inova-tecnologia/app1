import { Component } from '@angular/core';
@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
    public gameInProgress: boolean = true;
    public closureType: string = "";

    public finishGame(type: string): void {
        this.gameInProgress = false;
        this.closureType = type;
    }
         
} 
