import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})

export class HiddenDirective {

  el: ElementRef;
  renderer: Renderer;

  /*constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'display', 'none');
  }*/

  constructor(el: ElementRef, renderer: Renderer) {
    this.el = el;
    this.renderer = renderer;
  }

  @Input() appHidden: boolean;

  ngOnInit(){
    // Use renderer to render the element with styles
    console.log(this.appHidden);
    if(this.appHidden) {
      console.log('hide');
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    }
  }

}
