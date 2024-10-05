import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'
import { NativeScriptFormsModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { PolicyListComponent } from './policy/policy-list.component'
import { PolicyDetailComponent } from './policy/policy-detail.component'
import { PolicyUploadComponent } from './policy/policy-upload.component'
import { RemindersComponent } from './reminders/reminders.component'
import { EmergencyAssistanceComponent } from './emergency/emergency-assistance.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PolicyListComponent,
    PolicyDetailComponent,
    PolicyUploadComponent,
    RemindersComponent,
    EmergencyAssistanceComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}