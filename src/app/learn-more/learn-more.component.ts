import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-more',
  standalone: true,
  imports: [],
  templateUrl: './learn-more.component.html',
  styleUrl: './learn-more.component.scss'
})
export class LearnMoreComponent {
  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
