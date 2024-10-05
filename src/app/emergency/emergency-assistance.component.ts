import { Component } from '@angular/core'
import { PolicyService } from '../policy/policy.service'
import { Policy } from '../policy/policy.model'

@Component({
  selector: 'ns-emergency-assistance',
  templateUrl: './emergency-assistance.component.html',
})
export class EmergencyAssistanceComponent {
  policies: Policy[]

  constructor(private policyService: PolicyService) {
    this.policies = this.policyService.getPolicies()
  }

  onCallTap(phoneNumber: string) {
    // Implement phone call functionality
    console.log('Calling:', phoneNumber)
  }
}