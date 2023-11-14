import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tab {
  id: string;
  name: string;
}

const tabs: Tab[] = [{
  id: 'profile',
  name: 'Profile'
},
{
  id: 'name',
  name: 'Dashboard'
}];

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

  public selectedTab: Tab = tabs[0];

  public tabs = tabs;

  public loadedTabs: Tab[] = [];

  public setTab(tab: Tab): void {
    if (!this.loadedTabs.includes(tab)) {
      this.loadedTabs.push(tab);
    }

    this.selectedTab = tab;
  }

}
