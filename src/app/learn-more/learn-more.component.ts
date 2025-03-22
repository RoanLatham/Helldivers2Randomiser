import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GtagService } from '../services/gtag-service.service';

@Component({
  selector: 'app-learn-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learn-more.component.html',
  styleUrl: './learn-more.component.scss',
})
export class LearnMoreComponent implements AfterViewInit {
  // FAQ items can be expanded/collapsed
  faqItems = [
    {
      question: 'What is the Helldivers 2 Loadout Randomiser?',
      answer:
        'The Helldivers 2 Loadout Randomiser is a specialized tool that generates random loadout combinations including primary weapons, secondary weapons, grenades, stratagems, and boosters for Helldivers 2 players. It helps you discover new equipment combinations and keeps your gameplay experience fresh and exciting.',
      isOpen: false,
    },
    {
      question: "How do I filter out weapons or stratagems I don't own?",
      answer:
        "You can easily disable any weapons, stratagems, or boosters you don't own by using the filter sections below the randomizer. The fastest way is to toggle entire Warbonds on/off using the Warbond filter section, which will automatically disable all items from that Warbond.",
      isOpen: false,
    },
    {
      question:
        'What does "Guarantee Backpack" or "Guarantee Support Weapon" do?',
      answer:
        'These options ensure that your randomized loadout will always include at least one backpack or support weapon stratagem. This is useful for players who want a balanced loadout with these essential equipment types.',
      isOpen: false,
    },
    {
      question:
        'Is the Helldivers 2 Loadout Randomiser updated with new content?',
      answer:
        'Yes! The randomiser is regularly updated with the latest content from Helldivers 2, including new weapons, stratagems, and boosters from the most recent Warbonds and game updates. Typically updates occur alongside the content being added to the Helldivers 2 wiki. You can see the last update date at the bottom of the page.',
      isOpen: false,
    },
    {
      question: 'Why should I use randomized loadouts?',
      answer:
        'Randomized loadouts help prevent gameplay from becoming stale by encouraging you to try new equipment combinations you might not normally choose. This can help you discover powerful synergies, develop new skills with unfamiliar weapons, and add variety to your Helldivers 2 experience.',
      isOpen: false,
    },
  ];

  // Mission types for strategic considerations
  missionTypes = [
    { name: 'Bug Missions', id: 'bugs' },
    { name: 'Bot Missions', id: 'bots' },
    { name: 'Terminid Control', id: 'terminid' },
    { name: 'Automaton Assault', id: 'automaton' },
  ];

  constructor(private gtagService: GtagService) {}

  ngAfterViewInit() {
    // Track page view for analytics
    this.gtagService.trackEvent(
      'learn_more_viewed',
      'Learn More section viewed',
      'ENGAGEMENT'
    );
  }

  toggleFaqItem(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;

    // Track FAQ interaction
    if (this.faqItems[index].isOpen) {
      this.gtagService.trackEvent(
        'faq_opened',
        `FAQ opened: ${this.faqItems[index].question}`,
        'ENGAGEMENT'
      );
    }
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Track scroll to top action
    this.gtagService.trackEvent(
      'scroll_to_top',
      'User scrolled to top from Learn More',
      'NAVIGATION'
    );
  }

  scrollToRandomizer(event: Event) {
    event.preventDefault();

    // Scroll to the randomizer section at the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Track CTA click
    this.gtagService.trackEvent(
      'cta_clicked',
      'User clicked randomizer CTA in Learn More',
      'CONVERSION'
    );
  }
}
