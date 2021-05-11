import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store';
import { selectTabsGroup } from 'src/app/store/selectors';
import { EnumTabsGroup } from 'src/app/util/intdex';

@Component({
  selector: 'app-custom-code',
  templateUrl: './custom-code.component.html',
  styleUrls: ['./custom-code.component.css']
})

export class CustomCodeComponent implements OnInit {

  subscription?: Subscription;
  constructor(private store: Store<AppState>, private router: Router) { 
  }

  ngOnInit(): void {
    let tabsGroup  = this.store.select(selectTabsGroup)
    if(tabsGroup)
    {

       this.subscription = tabsGroup.subscribe(state => {
        if (state && state.size) {
          let arr = state.get(EnumTabsGroup.TabsCodeManagement);
          if (arr && arr.length) {
            arr.forEach(elem => {
              if (elem.status) {
                this.router.navigate([elem.route]);
              }
            })
          }
        }
      });
    }
    
  }

  ngOnDestory(){
    this.subscription?.unsubscribe();
  }

}
