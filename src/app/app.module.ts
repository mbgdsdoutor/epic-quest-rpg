import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoadingService } from './shared/loading/loading.service';
import { LoadingComponent } from './shared/loading/loading.component';
import { AlertComponent } from './shared/alert.component';
import { RulesComponent } from './shared/rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    RulesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [LoadingService],
  entryComponents: [
    LoadingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
