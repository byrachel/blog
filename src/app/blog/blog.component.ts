import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../services/donnees.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: any[];

  constructor(private donneesService: DonneesService) {

  }

  ngOnInit() {
    this.posts = this.donneesService.posts;
  }

  onSave() {
    this.donneesService.savePostToServer();
  }

  onFetch() {
    this.donneesService.getPostFromServer();
  }
  onFetch() {
    this.donneesService.getPostFromServer();
}
}
