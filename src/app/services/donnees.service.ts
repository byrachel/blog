import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

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
      status: true,
      category: 'coding'
    },
    {
      id: 2,
      title: 'Apprendre JS ECMA6',
      content: 'Les bases avant de débuter Angular ou React',
      likes: 10,
      lastUpdate: this.lastUpdate,
      status: false,
      category: 'coding'
    },
    {
      id: 3,
      title: 'Bientôt: ReactJS',
      content: 'Formation en 10 modules.',
      likes: 0,
      lastUpdate: this.lastUpdate,
      status: false,
      category: 'coding'
    }
  ];

  constructor (private httpClient : HttpClient) {}
    
  getPostById(id: number) {
    const post = this.posts.find(
      (postObject) => {
        return postObject.id === id;
      }
    );
    return post;
  }

  addPost(title:string, content:string, category:string) {
    const postObject = {
      id: 0,
      title: '',
      category: '',
      content: '',
      likes: 0,
      status: false,
      lastUpdate: this.lastUpdate
    };
    postObject.title = title;
    postObject.content = content;
    postObject.category = category;
    postObject.id = this.posts[(this.posts.length - 1)].id +1;
    this.posts.push(postObject);

  }

    savePostToServer() {
      this.httpClient
      .put('https://http-client-demo-c59a6.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('ok');
      },
        (error) => {
          console.log( error );
        }
      )
    }

    getPostFromServer() {
      this.httpClient
      .get<any[]>('https://http-client-demo-c59a6.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          
        },
        (error) => {
          console.log(error);
        }
      )
    }
  }


