import { LogInComponent } from "../app/pages/log-in/log-in.component";
import { MenuComponent } from "./menu/menu.component";
import { DashboardComponent } from "../app/pages/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonalComponent } from "./pages/personal/personal.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "menu", component: MenuComponent },
  { path: "logIn", component: LogInComponent },
  { path: "personal", component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
