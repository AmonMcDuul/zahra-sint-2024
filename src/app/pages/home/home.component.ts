import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sectionOne: Boolean = true;
  sectionTwo: Boolean = false;
  sectionThree: Boolean = false;
  sectionFour: Boolean = false;
  sectionFive: Boolean = false;
  sectionSix: Boolean = false;
  sectionSeven: Boolean = false;
  sectionEight: Boolean = false;
  sectionNine: Boolean = false;

  score: number = 0;
  maxScore: number = 8;
  goodAnswer: Boolean = false;
  state: number = 0

  constructor() {}

  ngOnInit(): void {
  }

  setGoodAnswerTrue(){
    this.goodAnswer = true;
  }

  setGoodAnswerFalse(){
    this.goodAnswer = false;
  }

  setRound(round: number){
    this.sectionOne = false;
    this.sectionTwo = false;
    this.sectionThree = false;
    this.sectionFour = false;
    this.sectionFive = false;
    this.sectionSix = false;
    this.sectionSeven = false;
    this.sectionEight = false;
    this.sectionNine = false;


    switch (round) {
      case 1:
        this.sectionOne = true;
        break;
      case 2:
        this.sectionTwo = true;
        break;
      case 3:
        this.sectionThree = true;
        break;
      case 4:
        this.sectionFour = true;
        break;
      case 5:
        this.sectionFive = true;
        break;
      case 6:
        this.sectionSix = true;
        break;
      case 7:
        this.sectionSeven = true;
        break;
      case 8:
        this.sectionEight = true;
        break;
      case 9:
        this.sectionNine = true;
        break;
      default:
    }
  }

  onSubmit(round: number){
    if(this.goodAnswer){
      this.state = 1;
      this.setRound(round + 1);
      this.score++;
    }
    else{
      this.state = 2;
    }
  }

  nextRound(){
    this.state = 0;
  }
  retryRound(){
    this.state = 0;
  }
}
