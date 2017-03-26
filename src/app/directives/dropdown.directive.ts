import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[ngDropdown]'
})
export class DropdownDirective {

  private isOpen = false;

  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  @HostListener('click') open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }

}
