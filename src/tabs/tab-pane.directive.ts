import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';
import { TabsComponent } from './tabs.component';

@Directive({
  selector: '[appTabPane]',
})
export class TabPaneDirective implements AfterViewInit {
  @HostBinding('class.active') activeTab: boolean;
  @HostBinding('class.tap-pane') tapPane = true;

  constructor(
    private tabs: TabsComponent,
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('click')
  onClick() {
    this.renderer.setStyle(
      this.tabs.highlighter.nativeElement,
      'width',
      `${this.element.nativeElement.offsetWidth}px`
    );
    this.renderer.setStyle(
      this.tabs.highlighter.nativeElement,
      'left',
      `${this.element.nativeElement.offsetLeft}px`
    );
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.element.nativeElement.className.includes('active'))
        this.onClick();
    }, 100);
  }
}
