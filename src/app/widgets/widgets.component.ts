import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../shared/widget.service';
import { Widget } from '../shared/widget.model';


@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

export class WidgetsComponent implements OnInit {
  selectedWidget: Widget;
  widgets: Widget[];

  constructor(private widgetService: WidgetService) {}

  ngOnInit() {
    this.widgets = this.widgetService.widgets;
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }
}
