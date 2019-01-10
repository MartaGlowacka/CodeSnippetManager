import { CommonModule } from "@angular/common";
import { LazyRoutingModule } from "./lazy-routing.module";
import { RouterModule, Routes } from "@angular/router";
import { LogInComponent } from "./pages/log-in/log-in.component";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [CommonModule, LazyRoutingModule],
  declarations: [LogInComponent]
})
export class LazyModule {}
