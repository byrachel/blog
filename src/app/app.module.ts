import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemsComponentComponent } from './post-list-items-component/post-list-items-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonneesService } from './services/donnees.service';
import { UserService } from './services/user.service';
import { AuthComponent } from './auth/auth.component';
import { BlogComponent } from './blog/blog.component';
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { UserListComponent } from './user-list/user-list.component';

const appRoutes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'blog/:id',
    canActivate: [AuthGuard],
    component: SinglepostComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'notfound',
    component: FourOhFourComponent
  },
  {
    path: 'edit',
    canActivate: [AuthGuard],
    component: EditPostComponent
  },
  {
    path: '',
    component: BlogComponent
  },
  {
    path: '**',
    redirectTo: '/notfound'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemsComponentComponent,
    AuthComponent,
    BlogComponent,
    SinglepostComponent,
    FourOhFourComponent,
    EditPostComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DonneesService, AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
