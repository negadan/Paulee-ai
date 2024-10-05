import { Injectable } from '@angular/core'
import { Policy } from './policy.model'

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  private policies: Policy[] = []

  getPolicies(): Policy[] {
    return this.policies
  }

  getPolicy(id: string): Policy | undefined {
    return this.policies.find(policy => policy.id === id)
  }

  addPolicy(policy: Policy) {
    this.policies.push(policy)
  }

  updatePolicy(updatedPolicy: Policy) {
    const index = this.policies.findIndex(p => p.id === updatedPolicy.id)
    if (index !== -1) {
      this.policies[index] = updatedPolicy
    }
  }

  deletePolicy(id: string) {
    this.policies = this.policies.filter(policy => policy.id !== id)
  }
}