import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddNextDiv]'
})
export class AddNextDivDirective implements OnInit {
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    console.log(this.el.nativeElement);

    this.el.nativeElement.innerHTML = ''

    const text = this.render.createText('Dynamic Div');
    const el = this.render.createElement('div');
    this.render.appendChild(el, text);

    const parent = this.render.parentNode(this.el.nativeElement);
    if (parent) {
      this.render.appendChild(parent, el);
    } else {
      console.log(parent);
    }
  }
}
