import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  lastUpdate = new Date();

  posts = [
    {
      id: 1,
      title: 'Apprendre Angular',
      content: 'Formation en 5 modules faciles',
      likes: 5,
      lastUpdate: this.lastUpdate,
      status: true
    },
    {
      id: 2,
      title: 'Apprendre JS ECMA6',
      content: 'Les bases avant de débuter Angular ou React',
      likes: 10,
      lastUpdate: this.lastUpdate,
      status: false
    },
    {
      id: 3,
      title: 'Bientôt: ReactJS',
      content: 'Formation en 10 modules.',
      likes: 0,
      lastUpdate: this.lastUpdate,
      status: false
    }
  ];
    
  getPostById(id: number) {
    const post = this.posts.find(
      (postObject) => {
        return postObject.id === id;
      }
    );
    return post;
}

  }


