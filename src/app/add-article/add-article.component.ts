// src/app/components/add-article/add-article.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  standalone: true,
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {
  @Output() articleAdded = new EventEmitter<Article>();

  addArticle(titleInput: HTMLInputElement, photoInput: HTMLInputElement, descriptionInput: HTMLTextAreaElement) {
    const newArticle: Article = {
      id: 0, // The ID will be set in ArticleListComponent
      title: titleInput.value,
      photo: photoInput.value,
      publicationDate: new Date(),
      description: descriptionInput.value,
      score: 0
    };

    this.articleAdded.emit(newArticle);

    // Reset form fields
    titleInput.value = '';
    photoInput.value = '';
    descriptionInput.value = '';
  }
}
