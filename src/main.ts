import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TabsModule } from './tabs/tabs.module';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './routes/routes';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, TabsModule, RouterModule],
  template: `
    <h1>Tabs layout</h1>
    <app-tabs>
      <div appTabPane routerLink="/page-1" routerLinkActive="active">Tab 1</div>
      <div appTabPane routerLink="/page-2" routerLinkActive="active">Tab 2</div>
      <div appTabPane routerLink="/page-3" routerLinkActive="active">Tab 3</div>
    </app-tabs>
    <router-outlet />

    <app-tabs>
      <div appTabPane [class.active]="tab === 'tab1'" (click)="tab = 'tab1'">Tab 1</div>
      <div appTabPane [class.active]="tab === 'tab2'" (click)="tab = 'tab2'">Tab 2</div>
    </app-tabs>
  `,
})
export class App {
  name = 'Angular';

  tab = 'tab1';

  
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
