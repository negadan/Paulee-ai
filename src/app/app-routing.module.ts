import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { HomeComponent } from './home/home.component'
import { PolicyListComponent } from './policy/policy-list.component'
import { PolicyDetailComponent } from './policy/policy-detail.component'
import { PolicyUploadComponent } from './policy/policy-upload.component'
import { RemindersComponent } from './reminders/reminders.component'
import { EmergencyAssistanceComponent } from './emergency/emergency-assistance.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'policies', component: PolicyListComponent },
  { path: 'policy/:id', component: PolicyDetailComponent },
  { path: 'upload', component: PolicyUploadComponent },
  { path: 'reminders', component: RemindersComponent },
  { path: 'emergency', component: EmergencyAssistanceComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}