import { Component, OnInit } from '@angular/core'
import { PolicyService } from './policy.service'
import { Policy } from './policy.model'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-policy-list',
  templateUrl: './policy-list.component.html',
})
export class PolicyListComponent implements OnInit {
  policies: Policy[] = []

  constructor(
    private policyService: PolicyService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit() {
    this.policies = this.policyService.getPolicies()
  }

  onPolicyTap(policy: Policy) {
    this.routerExtensions.navigate(['/policy', policy.id])
  }
}