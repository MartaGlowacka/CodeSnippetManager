import { AppPage } from "./../../e2e/src/app.po";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SvgBikeComponent } from "./svg-bike/svg-bike.component";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from "../app/pages/dashboard/dashboard.component";
import { MenuComponent } from "./menu/menu.component";
import { LogInComponent } from "../app/pages/log-in/log-in.component";
import { SignInComponent } from "../app/pages/sign-in/sign-in.component";
import { PersonalComponent } from "../app/pages/personal/personal.component";
import { TruncatePipe } from "./pipes/truncate.pipe";
import { TagComponent } from "../app/components/tag/tag.component";

@NgModule({
  declarations: [
    AppComponent,
    SvgBikeComponent,
    DashboardComponent,
    MenuComponent,
    LogInComponent,
    SignInComponent,
    PersonalComponent,
    TruncatePipe,
    TagComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
