import { 
  Directive, 
  OnInit, 
  Renderer2, 
  ElementRef, 
  HostListener,
  HostBinding,
  Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = "lightblue"

  @HostBinding('style.backgroundColor') backgroundColor: string;;

  constructor(private element: ElementRef, private renderer: Renderer2) {
   }

  ngOnInit(){
   // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'lightblue')
   this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mymouseove(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'lightblue')
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mymouseout(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'transparent')
    this.backgroundColor = this.defaultColor;
  }
}
