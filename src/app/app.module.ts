import { CommonModule } from "@angular/common";
import { SnippetsService } from "./services/snippets.service";
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
import { SnippetFormComponent } from "../app/components/snippet-form/snippet-form.component";
import { LastAddedSnippetsComponent } from "../app/components/last-added-snippets/last-added-snippets.component";
import { SnippetViewComponent } from "../app/components/snippet-view/snippet-view.component";
import { CodemirrorModule } from "@ctrl/ngx-codemirror";
import { FormsModule } from "@angular/forms";
import { AllSnippetsComponent } from "../app/components/all-snippets/all-snippets.component";
import { SearchFormComponent } from "../app/components/search-form/search-form.component";
import { HttpClientModule } from "@angular/common/http";
import { ConfigurationComponent } from "./configuration/configuration.component";
import { AllTagsComponent } from "../app/components/all-tags/all-tags.component";
import { ClickOutsideDirective } from "./directives/click-outside.directive";
import { TaskIconComponent } from './task-icon/task-icon.component';
import { BombComponent } from './bomb/bomb.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgBikeComponent,
    DashboardComponent,
    MenuComponent,
    SignInComponent,
    PersonalComponent,
    TruncatePipe,
    TagComponent,
    SnippetFormComponent,
    LastAddedSnippetsComponent,
    SnippetViewComponent,
    AllSnippetsComponent,
    SearchFormComponent,
    ConfigurationComponent,
    AllTagsComponent,
    ClickOutsideDirective,
    TaskIconComponent,
    BombComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    CodemirrorModule,
    HttpClientModule
  ],
  entryComponents: [],
  providers: [SnippetsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
