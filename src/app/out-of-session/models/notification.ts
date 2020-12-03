import { User } from './user';

export interface Notification {
  id?: number;
  from: User;
  to: User;
  adventureName?: string;
  type: NotificationType;
  status: NotificationStatus;
}

export interface NotificationReturn {
  id: number;
  userId?: User;
  description: string;
  adventure?: any;
}

export enum NotificationType {
  FriendList = 'FriendList',
  Adventure = 'Adventure',
}

export enum NotificationStatus {
  Created = 'Created',
  Accepted = 'Accepted',
  Denied = 'Denied',
}