import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-proj-nav',
  templateUrl: './proj-nav.component.html',
  styleUrls: ['./proj-nav.component.css']
})
export class ProjNavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  protected mobile: boolean;
  private mobileWidth: number = 500;

  constructor() {
    console.log(window.screen.width);
    this.mobile = window.screen.width < this.mobileWidth;
    console.log(window.screen.width < this.mobileWidth);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  protected readonly environment = environment;
}
