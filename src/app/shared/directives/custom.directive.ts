import {
  ElementRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  TemplateRef,
} from "@angular/core";

@Directive({
  selector: "[bwmHighlight]",
})
export class HighlightDirective implements OnInit {
  @Input("bwmHighlight") bwmHighlight;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.bwmHighlight;
  }
}

@Directive({
  selector: "[bwmNgIf]",
})
export class BwmNgIfDirective {
  hasView = false;

  @Input("bwmNgIf") set bwmNgIf(condition: boolean) {
    if (condition && !this.hasView) {
      this.container.createEmbeddedView(this.template);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.container.clear();
      this.hasView = false;
    }
  }

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
}
