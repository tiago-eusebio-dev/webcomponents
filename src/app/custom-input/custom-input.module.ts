import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { CustomInputComponent } from './custom-input.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [CustomInputComponent],
  exports: [CustomInputComponent],
  providers: [],
  bootstrap: [],
})
export class CustomInputModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(CustomInputComponent, {
      injector: this.injector,
    });
    customElements.define('custom-input', el);
  }
}
