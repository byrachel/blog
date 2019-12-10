import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../services/donnees.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-post',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit {

  title: string = '';
  content: string = '';

  constructor(private donneesService: DonneesService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.title = this.route.snapshot.params['id'];
    this.title = this.donneesService.getPostById(+id).title;
    this.content = this.donneesService.getPostById(+id).content;
}

}
