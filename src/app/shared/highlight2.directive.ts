import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlight2]',
})
export class Highlight2Directive {
  constructor(private element: ElementRef) {}
  @HostBinding('class.highlight') highlight: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight = false;
  }
}
