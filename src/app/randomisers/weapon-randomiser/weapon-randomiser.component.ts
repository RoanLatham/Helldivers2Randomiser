import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeaponDisplayComponent } from '../../displays/weapon-display/weapon-display.component';
import { Weapon } from '../../services/weapons';
import { WeaponFilterStateService } from '../../services/weapon-filter-state.service';
import { getRandomWeapons } from '../../services/data-access';
import { InitStateService } from '../../services/init-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weapon-randomiser',
  standalone: true,
  imports: [WeaponDisplayComponent],
  templateUrl: './weapon-randomiser.component.html',
  styleUrls: ['./weapon-randomiser.component.scss'],
})
export class WeaponRandomiserComponent implements OnInit, OnDestroy {
  primaryWeaponId!: string;
  secondaryWeaponId!: string;
  grenadeId!: string;

  disabledIds: string[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private weaponState: WeaponFilterStateService,
    private initStateService: InitStateService
  ) {}

  ngOnInit() {
    // Subscribe to the disabledIds$ observable
    this.subscription.add(
      this.weaponState.disabledIds$.subscribe((ids) => {
        this.disabledIds = ids;
      })
    );

    // Subscribe to the settingsLoaded$ observable from InitStateService
    this.subscription.add(
      this.initStateService.settingsLoaded$.subscribe((loaded) => {
        if (loaded) {
          // Only randomize if settings have been loaded
          this.randomise();
        }
      })
    );
  }

  ngOnDestroy() {
    // Clean up subscriptions
    this.subscription.unsubscribe();
  }

  randomise(): void {
    const weapons = getRandomWeapons({
      excludedWeaponIds: this.disabledIds,
    });

    // Set the weapon IDs from the randomized weapons
    this.primaryWeaponId = weapons.primary?.id || '';
    this.secondaryWeaponId = weapons.secondary?.id || '';
    this.grenadeId = weapons.throwable?.id || '';
  }
}
