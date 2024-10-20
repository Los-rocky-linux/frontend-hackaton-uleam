import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { full } from "./shared/routes/full.routes"; 
import { content } from "./shared/routes/content.routes"; 

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "",
    children: content,
  },
  {
    path: "**",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
