import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PolicyService } from './policy.service'
import { Policy } from './policy.model'

@Component({
  selector: 'ns-policy-detail',
  templateUrl: './policy-detail.component.html',
})
export class PolicyDetailComponent implements OnInit {
  policy: Policy | undefined

  constructor(
    private route: ActivatedRoute,
    private policyService: PolicyService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.policy = this.policyService.getPolicy(id)
  }
}