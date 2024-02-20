import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { BaseDatosCrudService } from 'src/Servicios/base-datos-crud.service';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit{
  
  constructor(private dt : BaseDatosCrudService){}

  ngOnInit(): void {
    this.dt.getTotalMoneyPorCiudad().subscribe(sumasPorCiudad => {
      let labels = Object.keys(sumasPorCiudad);
      let data = Object.values(sumasPorCiudad);
  
      new Chart("myChart", {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Total de dinero',
            data: data,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  }
  

}
