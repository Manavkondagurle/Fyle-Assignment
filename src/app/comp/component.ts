import { Component, Input } from '@angular/core';
import { GithubUserDetails } from '../interfaces/repository_model';

@Component({
  selector: 'app-comp',
  templateUrl: './component.html',
})
export class CompComponent {
  @Input() userData: GithubUserDetails | null = null;
}
