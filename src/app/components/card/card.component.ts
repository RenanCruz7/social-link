import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Output() textos:string[] = ["Github", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
}
