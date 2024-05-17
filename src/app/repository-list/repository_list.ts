import { Component, Input } from '@angular/core';
import { ServiceRepository } from '../interfaces/repository_model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository_list.html',
  styleUrl: './repository_list.css'
})
export class RepositoryListComponent {

 @Input() repositories: ServiceRepository[] | null = null;

}
