import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { Activity } from "./models/activity.model";
import activitiesData from "./data/activities.json";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, FormsModule],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected readonly title = signal("ProgressTracker");

  maxProgress: number = 100;

  muscles: number = 30;
  flex: number = 0;
  code: number = 0;
  smut: number = 0;
  money: number = 0;

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

  activities: Activity[] = activitiesData;
  selectedActivityId: number | null = null;

  get selectedActivity(): Activity | undefined {
    return this.activities.find(
      (activity) => activity.id === this.selectedActivityId,
    );
  }
}
