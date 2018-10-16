import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClickable]'
})
export class ClickableDirective {
  @HostBinding('title')
  ttl = 'My Div';

  @HostListener('click', ['$event.target'])
  onClick(target: any) {
    console.log(target.innerText);
  }
}
