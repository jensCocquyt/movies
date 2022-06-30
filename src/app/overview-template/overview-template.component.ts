import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-overview-template',
  templateUrl: './overview-template.component.html',
  styleUrls: ['./overview-template.component.scss'],
})
export class OverviewTemplateComponent implements AfterContentInit {
  @ContentChildren('overviewItem', { descendants: true })
  items?: QueryList<Component>;

  itemCount?: number;

  ngAfterContentInit(): void {
    this.items?.changes.subscribe((items) => (this.itemCount = items?.length));
  }
}
