import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import(
        "../../features/home/home.module"
      ).then((m) => m.HomeModule),
  },
  {
    path: "calendary",
    loadChildren: () =>
      import(
        "../../features/calendary/calendary.module"
      ).then((m) => m.CalendaryModule),
  },
];