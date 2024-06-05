

import { Component } from '@angular/core';

import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {

    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    ev.detail.complete();
  }
}
