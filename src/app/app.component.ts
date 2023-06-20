import { Component, OnInit } from '@angular/core';
import { InsumoService } from './users/service/insumo.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'defensoriapublica-ui';
  clientes:any = [];
  filterUser: any[] = [{name: 'Especial', key: 'ESPECIAL'}, {name: 'Normal', key: 'NORMAL'}, {name: 'Trabalhoso', key: 'TRABALHOSO'}];
  selectedFilterUser: any = null;

  filterRegion: any[] = [{name: 'Norte', key: 'NORTE'}, {name: 'Nordeste', key: 'NORDESTE'}, {name: 'Centro-Oeste', key: 'CENTRO_OESTE'}, {name: 'Suldeste', key: 'SUDESTE'}, {name: 'Sul', key: 'SUL'}];
  selectedFilterRegion: any = null;

  first: number = 0;
  rows: number = 10;

  constructor(private insumoService: InsumoService) { }

  

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
  }

  ngOnInit(): void { 
    this.selectedFilterUser = this.filterUser[0];
    this.selectedFilterRegion = this.filterRegion[0];
  }
}
