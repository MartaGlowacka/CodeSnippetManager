import { ConfigurationComponent } from "./configuration/configuration.component";
import { LastAddedSnippetsComponent } from "./components/last-added-snippets/last-added-snippets.component";
import { SnippetViewComponent } from "./components/snippet-view/snippet-view.component";
import { AllSnippetsComponent } from "./components/all-snippets/all-snippets.component";
import { LogInComponent } from "../app/pages/log-in/log-in.component";
import { MenuComponent } from "./menu/menu.component";
import { DashboardComponent } from "../app/pages/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonalComponent } from "./pages/personal/personal.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "menu", component: MenuComponent },
  // {
  //   path: "logIn",
  //   component: LogInComponent
  // },
  {
    path: "personal",
    component: PersonalComponent,

    children: [
      {
        path: "home",
        component: LastAddedSnippetsComponent
      },
      {
        path: "allSnippets",
        component: AllSnippetsComponent
      },
      {
        path: "settings",
        component: ConfigurationComponent
      }
    ]
  },
  {
    path: "personal/snippetView/:id",
    component: SnippetViewComponent
  },

  {
    path: "",
    children: [
      {
        path: "logIn",
        loadChildren: "./lazy.module#LazyModule"
      }
    ]
  }
  // { path: "lazy", loadChildren: "./lazy.module#LazyModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
