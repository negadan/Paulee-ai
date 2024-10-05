import { Component } from '@angular/core'
import { PolicyService } from '../policy/policy.service'
import { Policy } from '../policy/policy.model'

@Component({
  selector: 'ns-reminders',
  templateUrl: './reminders.component.html',
})
export class RemindersComponent {
  reminders: { policy: Policy; daysUntilExpiry: number }[] = []

  constructor(private policyService: PolicyService) {
    this.generateReminders()
  }

  generateReminders() {
    const policies = this.policyService.getPolicies()
    const today = new Date()
    
    this.reminders = policies
      .map(policy => ({
        policy,
        daysUntilExpiry: Math.ceil((policy.endDate.getTime() - today.getTime()) / (1000 * 3600 * 24))
      }))
      .filter(reminder => reminder.daysUntilExpiry <= 30)
      .sort((a, b) => a.daysUntilExpiry - b.daysUntilExpiry)
  }
}