import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabPaneDirective } from './tab-pane.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TabsComponent, TabPaneDirective],
  exports: [TabsComponent, TabPaneDirective],
})
export class TabsModule {}
