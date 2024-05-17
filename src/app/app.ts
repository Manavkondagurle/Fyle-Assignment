import { Component } from '@angular/core';
import { ServiceRepository, GithubUserDetails } from './interfaces/repository_model';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'angular-project';
  onSearch(username: string) {
    console.log('Search text received:', username);
  }


  loadedRepositories: ServiceRepository[] = [];
  UserData: GithubUserDetails | null = null;
  pagination: any |null = null;

   onRepositoriesLoaded(repositories: ServiceRepository[]) {
    console.log('Repositories loaded:', repositories);
    
    this.loadedRepositories = repositories;
  }

  onRepositoryLoaded(repository: GithubUserDetails){
    console.log("User Details: ", repository);

    this.UserData = repository;
  }

}
