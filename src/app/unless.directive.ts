import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean){
    if (!condition) {
      this.templateContainer.createEmbeddedView(this.templateRef);
    }else {
      this.templateContainer.clear();
    }
  };

  constructor(
    private templateRef: TemplateRef<any>, 
    private templateContainer: ViewContainerRef 
  ) { }


}
