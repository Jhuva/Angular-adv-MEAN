import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {
  
  @Input() title: string = 'Sin titulo';
  @Input('labels') doughnutChartLabels: Label[] = ['label1', 'label2', 'label3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [20, 50, 80]
  ];
  public colors: Color[] = [
    {
      backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]
    }
  ]

}
