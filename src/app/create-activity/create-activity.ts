import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Activity } from "../models/activity.model";
import activitiesData from "../data/activities.json";
import { ActivityService } from "../services/activity.service";

@Component({
  selector: "app-create-activity",
  imports: [FormsModule],
  templateUrl: "./create-activity.html",
  styleUrl: "./create-activity.css",
})
export class CreateActivity {
  // Trouver comment update activity à chaque changement

  muscleAmount: number = 0;
  flexAmount: number = 0;
  codeAmount: number = 0;
  smutAmount: number = 0;
  moneyAmount: number = 0;

  activities: Activity[] = activitiesData;
  selectedActivityId: number | null = null;

  constructor(private activityService: ActivityService) {
    this.activities = this.activityService.getActivities();
  }

  deleteActivity(activityID: number): void {
    const activity = this.activities.find(
      (activity) => activity.id === activityID,
    );

    if (!activity) {
      return;
    }

    this.activityService.deleteActivity(activity.id);
    this.activities = this.activityService.getActivities();
    this.selectedActivityId = null;
  }

  updateActivity(activityID: number): void {
    const activity = this.activities.find(
      (activity) => activity.id === activityID,
    );

    if (!activity) {
      return;
    }

    //prendre en variable les inputs reçu
    activity.rewards.muscles = this.muscleAmount;
    activity.rewards.flex = this.flexAmount;
    activity.rewards.code = this.codeAmount;
    activity.rewards.smut = this.smutAmount;
    activity.rewards.money = this.moneyAmount;

    this.activityService.updateActivity(activity);
    this.activities = this.activityService.getActivities();
  }

  get selectedActivity(): Activity | undefined {
    if (this.selectedActivityId === null) {
      return undefined;
    }

    return this.activityService.getActivityById(this.selectedActivityId);
  }

  onActivitySelected(): void {
    this.muscleAmount = this.selectedActivity?.rewards.muscles ?? 0;
    this.flexAmount = this.selectedActivity?.rewards.flex ?? 0;
    this.codeAmount = this.selectedActivity?.rewards.code ?? 0;
    this.smutAmount = this.selectedActivity?.rewards.smut ?? 0;
    this.moneyAmount = this.selectedActivity?.rewards.money ?? 0;
  }
}
