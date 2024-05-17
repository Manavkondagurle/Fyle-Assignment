import { Component, EventEmitter, Output, Input } from '@angular/core';
import { GithubApiService } from '../github_api';
import { ServiceRepository, GithubUserDetails } from '../interfaces/repository_model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search_bar.html',
})

export class SearchBarComponent {
  username: string = '';
  currentPage: any = 1;

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private githubApiService: GithubApiService) { }
  @Output() repositoriesLoaded: EventEmitter<ServiceRepository[]> = new EventEmitter<ServiceRepository[]>();
  @Output() repositoryLoaded: EventEmitter<GithubUserDetails> = new EventEmitter<GithubUserDetails>();
  @Output() paginationEvent: EventEmitter<any> = new EventEmitter<any>();

  searchUser() {
    this.searchEvent.emit(this.username);

    this.githubApiService.getRepositories(this.username)
      .subscribe((repositories: ServiceRepository[]) => {
        this.repositoriesLoaded.emit(repositories);
    });
    this.githubApiService.getUser(this.username)
      .subscribe((repository: GithubUserDetails) => {
        this.repositoryLoaded.emit(repository);
    });
      
    this.username = ''; 

  }
}
