import { Routes } from "@angular/router";
import { ProgressHome } from "./progress-home/progress-home";
import { CreateActivity } from "./create-activity/create-activity";

export const routes: Routes = [
  {
    path: "progress",
    component: ProgressHome,
  },
   {
    path: "createActivity",
    component: CreateActivity,
  },
];
