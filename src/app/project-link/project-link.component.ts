import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-link',
  template: `
    <button mat-button [matMenuTriggerFor]="menu">{{projectName}}</button>
    <mat-menu #menu="matMenu">
      <a style="text-decoration: none" target="_blank" href='{{projectLink}}'><button mat-menu-item>Live project</button></a>
      <a style="text-decoration: none" target="_blank" href='{{projectSrcLink}}'><button mat-menu-item>Source code</button></a>
    </mat-menu>
  `,
  styleUrls: ['./project-link.component.css']
})
export class ProjectLinkComponent {
  @Input("projectName") projectName = "Project name";
  @Input("projectLink") projectLink = "Project link";
  @Input("projectSrcLink") projectSrcLink = "Project source link";
}
