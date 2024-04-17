import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-blog-card',
  template: `
    <mat-card class="dashboard-card">
      <mat-card-header>
        <mat-card-title>
          {{title}}
        </mat-card-title>
        <mat-card-subtitle>
          {{postDate}}
        </mat-card-subtitle>
      </mat-card-header>
      <mat-card-content class="dashboard-card-content">
        <div><ng-content></ng-content></div>
      </mat-card-content>
      <mat-card-footer class="tag-footer">
        <span class="tag" *ngFor="let tag of tags">#{{tag}}</span>
      </mat-card-footer>
    </mat-card>
  `,
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent {
  @Input("title") title = "Title";
  @Input("postDate") postDate = "Date";
  @Input("tags") tags: string[] = [];
}
