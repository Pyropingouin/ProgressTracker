import { Injectable } from "@angular/core";

import { Activity } from "../models/activity.model";
import activitiesData from "../data/activities.json";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  private readonly storageKey = "activities";

  private activities: Activity[] = [];

  constructor() {
    this.loadActivities();
  }

  getActivities(): Activity[] {
    return this.activities;
  }

  getActivityById(id: number): Activity | undefined {
    return this.activities.find((activity) => activity.id === id);
  }

  addActivity(activity: Activity): void {
    this.activities.push(activity);
    this.saveActivities();
  }

  updateActivity(updatedActivity: Activity): void {
    const index = this.activities.findIndex(
      (activity) => activity.id === updatedActivity.id,
    );

    if (index === -1) {
      return;
    }

    this.activities[index] = updatedActivity;
    this.saveActivities();
  }

  deleteActivity(id: number): void {
    this.activities = this.activities.filter((activity) => activity.id !== id);
    this.saveActivities();
  }

  private loadActivities(): void {
    const savedActivities = localStorage.getItem(this.storageKey);

    if (savedActivities) {
      this.activities = JSON.parse(savedActivities);
      return;
    }

    this.activities = activitiesData as Activity[];
    this.saveActivities();
  }

  private saveActivities(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.activities));
  }
}
