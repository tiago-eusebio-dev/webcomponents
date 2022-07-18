import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { CustomListComponent } from './custom-list.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [CustomListComponent],
  exports: [CustomListComponent],
  providers: [],
  bootstrap: [],
})
export class CustomListModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(CustomListComponent, {
      injector: this.injector,
    });
    customElements.define('custom-list', el);
  }
}
