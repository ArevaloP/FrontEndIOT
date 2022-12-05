import { Component, OnInit } from '@angular/core';
import { LamphService } from '../../services/lamph.service';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  multi: any[] = [
    {
      "name": "Corriente",
      "series": [
        {
          "name": new Date('2022-11-21T18:01:00'),
          "value": 750
        },
        {
          "name": new Date('2022-11-21T22:01:00'),
          "value": 225
        },
        {
          "name": new Date('2022-11-21T22:13:00'),
          "value": 750
        },
        {
          "name": new Date('2022-11-21T22:17:00'),
          "value": 225
        },
        {
          "name": new Date('2022-11-21T22:34:00'),
          "value": 750
        },
        {
          "name": new Date('2022-11-21T22:36:00'),
          "value": 225
        },
        {
          "name": new Date('2022-11-21T22:56:00'),
          "value": 750
        },
        {
          "name": new Date('2022-11-21T22:59:00'),
          "value": 225
        },
        {
          "name": new Date('2022-11-21T23:21:00'),
          "value": 750
        },
        {
          "name": new Date('2022-11-21T23:31:00'),
          "value": 225
        },
        {
          "name": new Date('2022-11-22T00:34:00'),
          "value": 750
        },
        {
          "name": new Date('2022-11-22T00:36:00'),
          "value": 225
        },
        {
          "name": new Date('2022-11-22T02:34:00'),
          "value": 750
        },
        {
          "name": new Date('2022-11-22T02:35:00'),
          "value": 225
        },
        {
          "name": new Date('2022-11-22T06:01:00'),
          "value": 750
        },
        {
          "name": new Date('2022-11-22T06:01:00'),
          "value": 0
        },
      ]
    }
  ];

  single: any[] = [
    
  ];

  view: any = [700, 400];

  gradient: boolean = true;
  showLegend: boolean = true;
  isDoughnut: boolean = false;
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  legendPosition: any = "below";

  colorScheme:any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };



  constructor(private lamphService: LamphService) {
   }

  ngOnInit(): void {
      /* this.lamphService.obtenerDatosAll()
      .subscribe(resp =>{
        let result = this.parseDate(resp.lamphs);
        console.log(result);
        result = this.agregarDatos(result);
        this.multi[0].series = result;
        this.multi = [...this.multi];
      }) */
  }


  parseDate(data: Array<any>):Array<any>{
    const result = data.map(({corriente, fecha_inicio}, index)=>{
      return {
        name: new Date(fecha_inicio),
        value: corriente
      }
    });
    return result;
  }


  agregarDatos(data: Array<any>):Array<any>{
    const dataTemp = data;

    const datos = data.map(({name, value}, index, array)=>{
      let datoTemp;
      let valueTemp;
      if(index !== 0 && index !== array.length-1){
        
        valueTemp = value === "750" ? "225" : value === "225" ? "750" : "0";
        datoTemp = {
          name,
          value: valueTemp
        }
        dataTemp.push(datoTemp);

      }

      
    });

    return dataTemp;
  }






  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
