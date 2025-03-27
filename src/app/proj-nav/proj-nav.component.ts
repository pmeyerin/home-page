import {Component, inject, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-proj-nav',
  templateUrl: './proj-nav.component.html',
  styleUrls: ['./proj-nav.component.css']
})
export class ProjNavComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  protected mobile: boolean;
  private mobileWidth: number = 500;
  protected blogEmbedUrl: SafeResourceUrl | undefined;

  constructor(private domSanitizer: DomSanitizer) {
    console.log(window.screen.width);
    this.mobile = window.screen.width < this.mobileWidth;
    console.log(window.screen.width < this.mobileWidth);
  }

  ngOnInit(): void {
    this.blogEmbedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(environment.blogEmbed);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  protected readonly environment = environment;
}
