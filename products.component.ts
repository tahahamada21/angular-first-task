import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  movies = [
    {
      
        "id":766507,
        "overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
        "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
        "release_date":"2022-08-02",
        "title":"Prey",
        rating:3,
        isVisiable:false
      },
      {
        
        "id":610150,
        "overview":"The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
        "poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
        "release_date":"2022-06-11",
        "title":"Dragon Ball Super: Super Hero",
        rating:3.2,
        isVisiable:false
      },
      {
        "id":616037,
        "overview":"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
        "poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
        "release_date":"2022-07-06",
        "title":"Thor: Love and Thunder",
        rating:4.5,
        isVisiable:false
      },
      {
        "id":507086,
        "overview":"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
        "poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
        "release_date":"2022-06-01",
        "title":"Jurassic World Dominion",
        rating:2.5,
        isVisiable:false
      },
      {
        "id":438148,
        "overview":"A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
        "poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
        "release_date":"2022-06-29",
        "title":"Minions: The Rise of Gru",
        rating:2.7,
        isVisiable:false
      }
  ];
  toggleDetails(id:number){
    this.movies.filter(function(movie){
      if (movie.id === id) {
        movie.isVisiable =! movie.isVisiable ;
      }
    })
  }
  

}
