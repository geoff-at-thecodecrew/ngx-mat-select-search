import { Directive, HostListener, Input } from '@angular/core';
import { MatSelectSearchComponent } from './mat-select-search.component';

@Directive({
    selector: '[ngxMatSelectSearchTrigger]'
})
export class MatSelectSearchTrigger {

   @Input('ngxMatSelectSearchTrigger')
   target: MatSelectSearchComponent;
   
   @HostListener('keypress', ['$event'])
   handleKey(event: KeyboardEvent) {
       this.target.externalTrigger(event);
   }
}
