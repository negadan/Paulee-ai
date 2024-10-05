import { Component } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  navigateTo(path: string) {
    this.routerExtensions.navigate([path], { clearHistory: false })
  }
}