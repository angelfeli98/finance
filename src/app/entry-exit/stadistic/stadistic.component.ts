import { Component, OnInit, OnDestroy } from '@angular/core';
import { Move } from '../../interfaces/moves.interface';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { appState } from '../../app.reducer';

import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stadistic',
  templateUrl: './stadistic.component.html',
  styleUrls: ['./stadistic.component.css']
})
export class StadisticComponent implements OnInit, OnDestroy{

  public entry: number;
  public exit: number;
  public noEntry: number;
  public noExit: number;
  private subscription: Subscription;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };

  public pieChartLabels: Label[] = ['Entry', 'Exit'];
  public pieChartData: number[] = [];
  public pieChartType: ChartType;
  public pieChartLegend: boolean;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(0,255,0,0.3)', 'rgba(255,0,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(
    private store: Store<appState>
  ){
    this.pieChartLegend = true;
    this.pieChartType = 'pie';
    this.subscription = this.store.select('moves')
                                .subscribe(({moves}) => this.setIems(moves));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public setChar = (items: Move[]): void => {
    this.pieChartData = [
        items.filter(move => move.type === 'entry').reduce((prev, curr) => prev + curr.mount, 0),
        items.filter(move => move.type === 'exit').reduce((prev, curr) => prev + curr.mount, 0),
      ];
  }

  public setIems = (moves: Move[]): void => {
    this.setChar(moves);
    const entry = moves.filter(move => move.type === 'entry');
    const exit = moves.filter(move => move.type === 'exit');
    this.noEntry = entry.length;
    this.noExit = exit.length;
    this.entry = entry.reduce((prev, curr) => prev + curr.mount, 0);
    this.exit = exit.reduce((prev, curr) => prev + curr.mount, 0);
  }

}
