import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Activity } from "../models/activity.model";
import { ActivityService } from "../services/activity.service";

@Component({
  selector: "app-progress-home",
  imports: [FormsModule],
  templateUrl: "./progress-home.html",
  styleUrl: "./progress-home.css",
})
export class ProgressHome {
  protected readonly title = signal("ProgressTracker");

  maxProgress: number = 100;

  muscles: number = 30;
  flex: number = 0;
  code: number = 0;
  smut: number = 0;
  money: number = 0;

  activities: Activity[] = [];
  selectedActivityId: number | null = null;

  constructor(private activityService: ActivityService) {
    this.activities = this.activityService.getActivities();
  }

  addActivity(activityID: number): void {
    const activity = this.activities.find(
      (activity) => activity.id === activityID,
    );

    if (!activity) {
      return;
    }

    this.muscles = Math.min(
      this.muscles + (activity.rewards.muscles ?? 0),
      this.maxProgress,
    );

    this.flex = Math.min(
      this.flex + (activity.rewards.flex ?? 0),
      this.maxProgress,
    );

    this.code = Math.min(
      this.code + (activity.rewards.code ?? 0),
      this.maxProgress,
    );

    this.smut = Math.min(
      this.smut + (activity.rewards.smut ?? 0),
      this.maxProgress,
    );

    this.money = Math.min(
      this.money + (activity.rewards.money ?? 0),
      this.maxProgress,
    );
  }

  get selectedActivity(): Activity | undefined {
    if (this.selectedActivityId === null) {
      return undefined;
    }

    return this.activityService.getActivityById(this.selectedActivityId);
  }
}
