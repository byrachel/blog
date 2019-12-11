import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { DonneesService } from '../services/donnees.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  defaultCategory = 'coding';

  constructor(private donneesService: DonneesService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const title = form.value['title'];
    const content = form.value['content'];
    const category = form.value['category'];
    this.donneesService.addPost(title,content,category);
    this.router.navigate(['/blog']);
  }

}
