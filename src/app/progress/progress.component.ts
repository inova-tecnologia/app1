import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-app',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  @Input() public progress: number = 75; 
  
}        
