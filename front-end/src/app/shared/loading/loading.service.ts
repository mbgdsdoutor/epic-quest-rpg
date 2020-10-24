import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef
} from '@angular/core';
import { LoadingComponent } from './loading.component';

@Injectable()
export class LoadingService {

  componentRef: ComponentRef<LoadingComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  startLoading() {
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(LoadingComponent)
      .create(this.injector);

    this.appRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  startLoadingBar() {
    const loader = document.createElement('div');
    loader.classList.add('progress');
    document.body.appendChild(loader);
    const bar = document.createElement('div');
    bar.classList.add('indeterminate');
    loader.appendChild(bar);
  }

  stopLoadingBar() {
    document.querySelector(`.progress`).remove();
  }

  startLocalLoading(seletor: string) {
    const elemento = document.querySelector(`${seletor}`);
    const positionElemento = getComputedStyle(elemento).position;

    if (positionElemento === ('static' || 'unset')) {
      (elemento as HTMLElement).style.position = 'relative';
    }

    const loader = document.createElement('div');
    loader.classList.add('loader');
    elemento.appendChild(loader);
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    loader.appendChild(spinner);
  }

  stopLocalLoading(seletor: string) {
    const elemento = document.querySelector(`${seletor}`);
    if (elemento) {
      if ((elemento as HTMLElement).style.position === 'relative') {
        (elemento as HTMLElement).style.position = 'static';
      }
    }
    if (document.querySelector(`${seletor} .loader`)) {
      document.querySelector(`${seletor} .loader`).remove();
    }
  }

  stopLoading() {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }

  appendComponentToBody(component: any) {
    // Create a component reference from the component
    component = LoadingComponent;

    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;


    // Append DOM element to the body
    document.body.appendChild(domElem);

    // Wait some time and remove it from the component tree and from the DOM
    setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, 3000);
  }
}
