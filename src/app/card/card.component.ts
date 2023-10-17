import { Component, Input } from '@angular/core';
interface planfeatures{
  name:string;
  isEnable?:boolean;
}
interface planDetail{
  plan:string;
  price:number;
  features: Array<planfeatures>;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() planObj : planDetail|undefined;
  }
