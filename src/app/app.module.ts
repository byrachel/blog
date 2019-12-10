import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemsComponentComponent } from './post-list-items-component/post-list-items-component.component';
import { FormsModule } from '@angular/forms';
import { DonneesService } from './services/donnees.service';
import { AuthComponent } from './auth/auth.component';
import { BlogComponent } from './blog/blog.component';
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from './services/auth.service';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

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
    component: SinglepostComponent
  },
  {
    path: 'notfound',
    component: FourOhFourComponent
  },
  {
    path: '**',
    redirectTo: '/notfound'
  },
  {
    path: '',
    component: BlogComponent
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
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DonneesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
