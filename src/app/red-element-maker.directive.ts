import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[RedElementMaker]'
})
export class RedElementMakerDirective {

  constructor(e1: ElementRef) {

    e1.nativeElement.style.color = "red";


  }

}
