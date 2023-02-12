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
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
