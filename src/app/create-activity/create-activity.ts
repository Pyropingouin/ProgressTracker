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

  get selectedActivity(): Activity | undefined {
    if (this.selectedActivityId === null) {
      return undefined;
    }

    return this.activityService.getActivityById(this.selectedActivityId);
  }
}
