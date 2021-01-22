import { Component, OnInit, ElementRef } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
declare var $: any;


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  model;


  constructor(private calendar: NgbCalendar) {

    this.model = new Date();
  }
  ngOnInit(): void {

  }
}



