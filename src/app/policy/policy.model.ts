export interface Policy {
  id: string;
  type: string;
  insurer: string;
  policyNumber: string;
  coverageAmount: number;
  premium: number;
  startDate: Date;
  endDate: Date;
  documents: string[];
}