import { Routes } from "@angular/router";
import { ProgressHome } from "./progress-home/progress-home";
import { ManageActivity } from "./manage-activity/manage-activity";

export const routes: Routes = [
  {
    path: "progress",
    component: ProgressHome,
  },
  {
    path: "manageActivity",
    component: ManageActivity,
  },
];
