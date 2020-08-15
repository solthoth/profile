import { Component, OnInit, Input } from '@angular/core';
import { Information } from '../models/information';

@Component({
  selector: 'app-small-view',
  templateUrl: './small-view.component.html',
  styleUrls: ['./small-view.component.css']
})
export class SmallViewComponent implements OnInit {

  @Input() info: Information;

  constructor() { }

  ngOnInit(): void {
  }

}
