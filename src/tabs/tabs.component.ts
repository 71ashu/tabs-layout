import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <ng-content></ng-content>
    <div class="tab-highlighter" #highlighter></div>
  `,
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  @ViewChild('highlighter') highlighter: ElementRef;
}
