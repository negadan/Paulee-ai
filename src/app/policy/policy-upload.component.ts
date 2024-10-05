import { Component } from '@angular/core';
import { PolicyService } from './policy.service';
import { GeminiService } from '../services/gemini.service';
import { RouterExtensions } from '@nativescript/angular';
import { File, knownFolders, path } from '@nativescript/core';

@Component({
  selector: 'ns-policy-upload',
  templateUrl: './policy-upload.component.html',
})
export class PolicyUploadComponent {
  constructor(
    private policyService: PolicyService,
    private geminiService: GeminiService,
    private routerExtensions: RouterExtensions
  ) {}

  async onFileSelected(args: any) {
    const filePickerResult = args.object.files[0];
    if (filePickerResult) {
      try {
        const file = File.fromPath(filePickerResult.path);
        const fileContent = await file.readText();
        const extractedData = await this.geminiService.analyzeDocument(fileContent);

        if (extractedData) {
          const newPolicy = {
            id: Date.now().toString(),
            type: extractedData.policyType,
            insurer: extractedData.insurerName,
            policyNumber: extractedData.policyNumber,
            coverageAmount: parseFloat(extractedData.coverageAmount),
            premium: parseFloat(extractedData.premiumAmount),
            startDate: new Date(extractedData.startDate),
            endDate: new Date(extractedData.endDate),
            documents: [filePickerResult.name]
          };

          this.policyService.addPolicy(newPolicy);
          this.routerExtensions.navigate(['/policies']);
        } else {
          console.error('Failed to extract policy data');
        }
      } catch (error) {
        console.error('Error processing file:', error);
      }
    }
  }
}