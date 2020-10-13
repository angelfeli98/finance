import { Component, OnInit } from '@angular/core';
import { EntryExitSevice } from '../services/entry-exit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private entryExitService: EntryExitSevice
  ) { }

  ngOnInit(): void {
  }

}
