import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert, AlertService, AlertType } from './alert.service';

@Component({
  selector: 'epic-alert',
  template: `
    <div *ngFor="let alert of alerts" class="{{cssClass(alert)}}">
    <i class="material-icons">{{alertIcon(alert)}}</i>
        <p>{{alert.message}}</p>
        <a class="close" (click)="removeAlert(alert)">&times;</a>
    </div>
    `
})

export class AlertComponent implements OnInit, OnDestroy {
  @Input() id: string;

  alerts: Alert[] = [];
  subscription: Subscription;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.onAlert(this.id)
      .subscribe(alert => {
        if (!alert.message) {
          this.alerts = [];
          return;
        }
        this.alerts.push(alert);
        this.alertCountDown(alert);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  alertCountDown(alert: Alert) {
    setTimeout(() => {
      this.removeAlert(alert);
    }, 4000);
  }

  removeAlert(alert: Alert) {
    this.alerts = this.alerts.filter(x => x !== alert);
  }

  alertIcon(alert: Alert) {
    if (!alert) {
      return;
    }
    switch (alert.type) {
      case AlertType.Success:
        return 'check_circle';
      case AlertType.Error:
        return 'error_outline';
      case AlertType.Info:
        return 'info';
      case AlertType.Warning:
        return 'warning';
    }
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }
    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }
}
