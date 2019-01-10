import { LogInComponent } from "./pages/log-in/log-in.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const routes: Routes = [{ path: "", component: LogInComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class LazyRoutingModule {}
