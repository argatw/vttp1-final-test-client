import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { CreatePostingComponent } from './components/create-posting/create-posting.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostService } from './service/post.service';

const appRoutes: Routes = [
  { path: '', component: CreatePostingComponent },
  { path: 'post', component: PostDetailsComponent},
  // { path: '**', redirectTo: '/', pathMatch: 'full'},
  
]

@NgModule({
  declarations: [
    AppComponent,
    CreatePostingComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
