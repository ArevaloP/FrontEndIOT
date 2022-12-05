import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { LamphService } from '../../services/lamph.service';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
const day = today.getDay();

@Component({
  selector: 'app-varios',
  templateUrl: './varios.component.html',
  styleUrls: ['./varios.component.css'],
  providers: [{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}]
})
export class VariosComponent implements OnInit {

  color: string = '#DDBDF1';
  view: any = [700, 400];
  
  viewCard: any = [700, 200];

  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  showXAxis = true;
  showYAxis = true;
  gradient= true;
  showLegend=  true;
  showLabels=  true;
  isDoughnut=  false;
  legendPosition:any= 'right';
  cardColor: string = '#232837';
  colorScheme: any= {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  singleCircle: any= [
    {
      "name": "18:00 - 21:59",
      "value": 27
    },
    {
      "name": "10:00 - 1:59",
      "value": 18.36
    },
    {
      "name": "2:00 - 5:59",
      "value": 10.156
    }
  ];
  
  singleBarras: any = [
    {
      "name": "18:00 - 21:59",
      "value": 750
    },
    {
      "name": "10:00 - 1:59",
      "value": 510
    },
    {
      "name": "2:00 - 5:59",
      "value": 282
    }
  ];

  singleCards: any = [
    {
      "name": "Activacion del Sensor",
      "value": 384
    },
    {
      "name": "Voltaje(V)",
      "value": 36
    }
  ];

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  constructor(private lamphService: LamphService) { }

  ngOnInit(): void {
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  changeDate(type: string, event: any){
    

    if(this.range.value.start !== null && this.range.value.end !== null){
      console.log(this.range.value.start._d.getUTCDate());
    }

  }

}
