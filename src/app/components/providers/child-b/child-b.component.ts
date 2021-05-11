import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { EnumComp, EnumTabsGroup } from 'src/app/util/intdex';

import * as Actions from './../../../store/actions/comp-actions';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.sass']
})
export class ChildBComponent implements OnInit {

  path?: any;

  subscription: Subscription;

  constructor(private store: Store<AppState>, private router: Router) {
    this.subscription = router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe((e: any) => {
      this.path = e.url;
      console.log(e.id, e.url);
    });
  }

  ngOnInit(): void {

    let tabModel = {
      groupId: EnumTabsGroup.TabsProviderManagement,
      tabIndex: '1',
      tabTitle: 'child-b-component',
      tabId: '1',
      route: this.path,
      status: true
    };

    let compModel = {
      id: EnumComp.ProviderComp,
      title: 'child-b-component',
      route:  this.path,
      status: true,
      nav: tabModel
    }
    this.store.dispatch(new Actions.SetActive(compModel));
  }


  ngAfterViewInit() {
    this.subscription.unsubscribe();
  }

}
