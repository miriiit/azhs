import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { TabModel } from 'src/app/store/models/tab-model';
import { EnumComp, EnumTabsGroup } from 'src/app/util/intdex';

import * as Actions from '../../../store/actions/comp-actions';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.sass']
})
export class ChildAComponent implements OnInit {

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
      tabTitle: 'child-a-component',
      tabId: '0',
      route: this.path,
      status: true
    };
    
    let set = new Set<TabModel>();
    set.add(tabModel);
    
    let compModel = {
      id: EnumComp.CodeComp,
      title: 'code-component-nav',
      route:  this.path,
      status: true,
      nav: set
    }

    this.store.dispatch(new Actions.SetActive(compModel));
  }


  ngAfterViewInit() {
    this.subscription.unsubscribe();
  }

}
