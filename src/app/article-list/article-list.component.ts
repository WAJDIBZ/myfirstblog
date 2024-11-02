// src/app/components/article-list/article-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { AddArticleComponent } from '../add-article/add-article.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  standalone: true,
  imports: [AddArticleComponent,CommonModule],
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [
    { id: 1, title: 'Oppenheimer', photo: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/boAUuJBeID7VNp4L7LNMQs8mfQS.jpg', publicationDate: new Date(), description: "Pour ma part, **Oppenheimer** s\’affirme comme une œuvre cinématographique d\’une profondeur saisissante, un véritable miroir tendu à l’âme humaine confrontée à la monstruosité du progrès scientifique. À travers le personnage tourmenté de J. Robert Oppenheimer, magistralement interprété par Cillian Murphy, le film nous plonge dans une quête introspective, où l’intellect s’illumine tout en se noyant dans l’ombre des conséquences dévastatrices de ses découvertes. Nolan, en virtuose de la narration, joue avec les temporalités, tissant un récit qui oscille entre l’exaltation de l’innovation et le poids écrasant du remords.Les séquences en noir et blanc, avec leur esthétique saisissante, créent une atmosphère empreinte de gravité, accentuant l\’ambivalence de l’homme face à ses propres créations. Chaque regard, chaque geste d’Oppenheimer résonne comme une question ouverte sur la responsabilité éthique qui incombe à ceux qui détiennent le savoir. Ce film ne se contente pas de relater un épisode historique ; il nous invite à réfléchir sur les dilemmes moraux qui hantent les esprits des scientifiques, confrontés à la fine ligne entre le génie et la destruction. Ainsi, **Oppenheimer** résonne en moi comme une réflexion profonde sur le prix du progrès, une méditation sur les ombres qui se cachent derrière la lumière de la connaissance, nous rappelant que chaque avancée peut être porteuse d’une immense responsabilité. Dans cette oeuvre, la beauté de la pensée humaine se mêle à son tragique destin, nous laissant face à nos propres interrogations sur l’avenir de l’humanité.", score: 0 },
    { id: 2, title: 'Chernobyl', photo: 'https://i.pinimg.com/236x/4c/e2/2d/4ce22d5520dff4f1da8ea08aae1215b1.jpg', publicationDate: new Date(), description: '**Chernobyl**, cette mini-série d’une puissance évocatrice inouïe, se présente comme un véritable monument à la mémoire des victimes d’une catastrophe nucléaire dont l’écho résonne encore dans notre conscience collective. Craig Mazin, en tant que créateur, s’illustre par une maîtrise narrative qui transcende la simple reconstitution historique pour devenir une réflexion profonde sur la condition humaine face à l’absurde. Dans un récit aux allures de tragédie grecque, chaque personnage incarne une facette de l’humanité, tiraillée entre le devoir, la peur et la quête désespérée de la vérité.Les images que nous livre la série, à la fois crues et poétiques, évoquent un paysage désolé où l’innocence se heurte à la brutalité du destin. Les scènes de désolation, baignées dans une lumière blafarde, font écho aux souffrances endurées par ceux qui, dans un acte de bravoure, se sont élevés contre l’ombre du mensonge. Le jeu d’acteur, particulièrement celui de Jared Harris, confère une profondeur presque tragique au personnage de Valery Legasov, dont le désespoir face à l’ineptie bureaucratique résonne comme un cri de rage et de désespoir.**Chernobyl** ne se contente pas de relater un événement tragique ; elle interroge notre rapport à la vérité et à la science, soulignant la fragilité d’un monde où la quête du pouvoir et la peur de la honte peuvent conduire à l’oubli des leçons les plus vitales. Par une écriture riche et métaphorique, la série nous rappelle que l’histoire est non seulement faite de faits, mais aussi d’histoires humaines, de sacrifices et de tragédies personnelles. Elle nous invite à contempler les ombres qui s’étendent sur notre présent, à réfléchir sur les dérives d’une société qui, dans sa course effrénée vers le progrès, peut parfois perdre de vue la nécessité de l’honnêteté et de la responsabilité. Ainsi, **Chernobyl** s’érige comme un testament poignant et nécessaire, une œuvre qui nous pousse à ne jamais oublier le coût tragique de nos erreurs.', score: 0 },
    { id: 3, title: 'Better Call Saul', photo: 'https://upload.wikimedia.org/wikipedia/en/0/04/Better_Call_Saul_season_6.jpg', publicationDate: new Date(), description: 'Better Call Saul, a prequel to the acclaimed series Breaking Bad, delves into the complex transformation of Jimmy McGill into the morally ambiguous lawyer Saul Goodman. The show masterfully balances dark humor and intense drama, offering a deep exploration of character and consequence.', score: 0 },
    { id: 4, title: 'Breaking Bad', photo: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', publicationDate: new Date(), description: 'Breaking Bad follows the journey of Walter White, a high school chemistry teacher turned methamphetamine manufacturer. The series is a gripping tale of morality, power, and the consequences of choices, with standout performances and a compelling narrative.', score: 0 },
    { id: 5, title: 'Stranger Things', photo: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg', publicationDate: new Date(), description: 'Stranger Things is a thrilling sci-fi series that captures the essence of 1980s nostalgia. It follows a group of kids in the small town of Hawkins as they encounter supernatural forces and government conspiracies, all while trying to find their missing friend.', score: 0 },
  ];
  searchText: string = '';
  showAddArticleForm: boolean = false;
  nextId: number = 3; // Start ID counter from the next number

  ngOnInit() {
    this.sortArticles();
  }

  onSearchInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value.toLowerCase();
  }

  filterArticles() {
    return this.articles.filter(article => article.title.toLowerCase().includes(this.searchText));
  }

  upvote(article: Article) {
    article.score += 1;
    this.sortArticles();
  }

  downvote(article: Article) {
    if (article.score > 0) {
      article.score -= 1;
    }
    this.sortArticles();
  }

  sortArticles() {
    this.articles.sort((a, b) => b.score - a.score);
  }

  addArticle(newArticle: Article) {
    newArticle.id = this.nextId++; // Assign and increment nextId for uniqueness
    this.articles.push(newArticle);
    this.sortArticles();
    this.showAddArticleForm = false;
  }

  toggleAddArticleForm() {
    this.showAddArticleForm = !this.showAddArticleForm;
  }
}
