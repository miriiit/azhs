
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map, mergeAll, switchMap, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { EnumTabsGroup } from 'src/app/util/enum.tabs.group';

import * as TabActions from './../../store/actions/tab-actions';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})
export class FirstComponent implements OnInit {

  path?: any;
 
  subscription: Subscription;
  constructor(private store: Store<AppState>, private router: Router) { 
   
    this.subscription = router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe((e: any) => {
      this.path = e.url;
      console.log(e.id, e.url);
    });
   
    /*router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
   ).subscribe((e: RouterEvent) => {
     logger.log(e.id, e.url);
   });*/
  }

  ngOnInit(): void {
    let tabModel = {
      groupId: EnumTabsGroup.TabsCodeManagement,
      tabIndex: '0',
      tabTitle: 'first-component',
      tabId: '1',
      tabRoute: this.path,
      status: true,
    };
    this.store.dispatch(new TabActions.TabsActiveRoute(tabModel))
  }

  ngAfterViewInit(){
    this.subscription.unsubscribe();
  }

}
