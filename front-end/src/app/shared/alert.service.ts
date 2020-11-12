import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}

export class Alert {
  type: AlertType;
  message: string;
  alertId: string;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}



@Injectable({ providedIn: 'root' })
export class AlertService {
  private subject = new Subject<Alert>();

  constructor() { }

  onAlert(alertId?: string): Observable<Alert> {
    return this.subject.asObservable().pipe(filter(x => x && x.alertId === alertId));
  }

  success(message: string, alertId?: string) {
    this.alert(new Alert({ message, type: AlertType.Success, alertId }));
  }

  error(message: string, alertId?: string) {
    this.alert(new Alert({ message, type: AlertType.Error, alertId }));
  }

  info(message: string, alertId?: string) {
    this.alert(new Alert({ message, type: AlertType.Info, alertId }));
  }

  warn(message: string, alertId?: string) {
    this.alert(new Alert({ message, type: AlertType.Warning, alertId }));
  }

  alert(alert: Alert) {
    this.subject.next(alert);
  }

  // clear alerts
  clear(alertId?: string) {
    this.subject.next(new Alert({ alertId }));
  }
}
