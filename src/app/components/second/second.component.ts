
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { EnumTabsGroup } from 'src/app/util/intdex';

import * as TabActions from './../../store/actions/tab-actions';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass']
})
export class SecondComponent implements OnInit {
  
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
      groupId: EnumTabsGroup.TabsCodeManagement,
      tabIndex: '0',
      tabTitle: 'first-component',
      tabId: '1',
      route: this.path,
      status: true,
    };
    this.store.dispatch(new TabActions.TabsActiveRoute(tabModel))
  }

  ngAfterViewInit(){
    this.subscription.unsubscribe();
  }

}
