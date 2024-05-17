import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app';
import { CompComponent } from './comp/component';
import { SearchBarComponent } from './search-bar/search_bar';
import { RepositoryListComponent } from './repository-list/repository_list';

import { GithubApiService } from './github_api';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    SearchBarComponent,
    RepositoryListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
