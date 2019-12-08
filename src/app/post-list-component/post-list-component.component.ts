import { Component, OnInit, Input } from '@angular/core';
import { DonneesService } from '../services/donnees.service'

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() likes: number;
  @Input() lastUpdate: string;
  @Input() index: number;
  @Input() status: boolean;

  addLikes() {
    this.likes ++
  }
  dislike() {
    this.likes --
  }

  addColor() {
    if(this.likes > 1) {
      return 'green';
    } else {
      return 'grey';
    }
  }

  constructor(private donneesService: DonneesService) {}

}

