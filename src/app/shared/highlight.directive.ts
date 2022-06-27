import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.border = '1px solid transparent';
    this.element.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.borderColor = 'grey';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.borderColor = 'transparent';
  }
}
