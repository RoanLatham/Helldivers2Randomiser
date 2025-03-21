import { Component, OnInit } from '@angular/core';
import { Stratagem, stratagemsByShipModule } from '../stratagems';
import { CommonModule } from '@angular/common';
import { StratagemFilterStateService } from '../stratagem-filter-state.service';
import { CollapsibleSectionComponent } from '../shared/collapsible-section/collapsible-section.component';
import { getStratagemsByShipModule, getAllShipModules } from '../data-access';

@Component({
  selector: 'app-stratagem-filters',
  standalone: true,
  imports: [CommonModule, CollapsibleSectionComponent],
  templateUrl: './stratagem-filters.component.html',
  styleUrl: './stratagem-filters.component.scss',
})
export class StratagemFiltersComponent implements OnInit {
  stratagems: Stratagem[] = [];
  shipModules: string[] = [];
  disabledIds: string[] = [];
  onlyOneBackpack: boolean = false;
  onlyOneSupport: boolean = false;
  guaranteeBackpack: boolean = false;
  guaranteeSupport: boolean = false;
  stratagemCollapsed: boolean = false;

  constructor(private stratagemState: StratagemFilterStateService) {}

  ngOnInit(): void {
    // Get all stratagems grouped by ship module
    this.shipModules = getAllShipModules();

    // Collect all stratagems
    this.shipModules.forEach((module) => {
      const moduleStratagems = getStratagemsByShipModule(module);
      this.stratagems = [...this.stratagems, ...moduleStratagems];
    });

    // Subscribe to the disabledIds$ observable
    this.stratagemState.disabledIds$.subscribe((ids) => {
      this.disabledIds = ids;
    });

    // Subscribe to the onlyOneBackpack$ observable
    this.stratagemState.onlyOneBackpack$.subscribe((value) => {
      this.onlyOneBackpack = value;
    });

    // Subscribe to the onlyOneSupport$ observable
    this.stratagemState.onlyOneSupport$.subscribe((value) => {
      this.onlyOneSupport = value;
    });

    // Subscribe to the guaranteeBackpack$ observable
    this.stratagemState.guaranteeBackpack$.subscribe((value) => {
      this.guaranteeBackpack = value;
    });

    // Subscribe to the guaranteeSupport$ observable
    this.stratagemState.guaranteeSupport$.subscribe((value) => {
      this.guaranteeSupport = value;
    });
  }

  toggleStratagem(id: string): void {
    this.stratagemState.toggleStratagem(id);
  }

  toggleOnlyOneBackpack(): void {
    this.stratagemState.toggleOnlyOneBackpack();
  }

  toggleGuaranteeBackpack(): void {
    this.stratagemState.toggleGuaranteeBackpack();
  }

  toggleOnlyOneSupport(): void {
    this.stratagemState.toggleOnlyOneSupport();
  }

  toggleGuaranteeSupport(): void {
    this.stratagemState.toggleGuaranteeSupport();
  }

  toggleStratagemCollapse(collapsed?: boolean): void {
    if (collapsed !== undefined) {
      this.stratagemCollapsed = collapsed;
    } else {
      this.stratagemCollapsed = !this.stratagemCollapsed;
    }
  }

  getStratagemsForModule(module: string): Stratagem[] {
    return this.stratagems.filter(
      (stratagem) => stratagem.shipModule === module
    );
  }

  toggleModule(module: string): void {
    const moduleStratagems = this.getStratagemsForModule(module);
    const moduleIds = moduleStratagems.map((stratagem) => stratagem.id);

    // Check if all stratagems in this module are disabled
    const allDisabled = moduleStratagems.every((stratagem) =>
      this.disabledIds.includes(stratagem.id)
    );

    if (allDisabled) {
      // Enable all stratagems in this module
      moduleIds.forEach((id) => {
        if (this.disabledIds.includes(id)) {
          this.stratagemState.enableStratagem(id);
        }
      });
    } else {
      // Disable all stratagems in this module
      moduleIds.forEach((id) => {
        if (!this.disabledIds.includes(id)) {
          this.stratagemState.disableStratagem(id);
        }
      });
    }
  }

  isModuleDisabled(module: string): boolean {
    const moduleStratagems = this.getStratagemsForModule(module);
    return moduleStratagems.every((stratagem) =>
      this.disabledIds.includes(stratagem.id)
    );
  }
}
