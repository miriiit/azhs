import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store';
import { selectComponents } from 'src/app/store/selectors';
import { EnumComp, EnumTabsGroup } from 'src/app/util/intdex';

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
    let compState  = this.store.select(selectComponents)
    if(compState)
    {
       this.subscription = compState.subscribe(state => {
        if (state) {
          let comp = state.get(EnumComp.CodeComp);
          //EnumTabsGroup.TabsCodeManagement
          if (comp) {
            let nav = comp.nav;
            if(nav && nav.size) {
              nav.forEach(tab => {
                if (tab.groupId == EnumTabsGroup.TabsCodeManagement) {
                  if (tab.status) {
                    this.router.navigate([tab.route]);
                  }
                }
              })
            }
           
          }
        }
      });
    }
  }
  ngOnDestory(){
    this.subscription?.unsubscribe();
  }

}
