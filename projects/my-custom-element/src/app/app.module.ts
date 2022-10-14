import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MyCustomElementComponent } from './my-custom-element/my-custom-element.component';

@NgModule({
  declarations: [MyCustomElementComponent],
  imports: [BrowserModule],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const customElement = createCustomElement(MyCustomElementComponent, {
      injector: this.injector,
    });
    customElements.define('my-ng-custom-element', customElement);
  }
}
