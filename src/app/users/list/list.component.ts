import { Component, OnInit } from '@angular/core';
import { InsumoService } from 'src/app/users/service/insumo.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clientes:any = [];
  filterUser: any[] = [{name: 'Especial', key: 'ESPECIAL'}, {name: 'Normal', key: 'NORMAL'}, {name: 'Trabalhoso', key: 'TRABALHOSO'}];
  selectedFilterUser: any = null;

  filterRegion: any[] = [{name: 'Norte', key: 'NORTE'}, {name: 'Nordeste', key: 'NORDESTE'}, {name: 'Centro-Oeste', key: 'CENTRO_OESTE'}, {name: 'Suldeste', key: 'SUDESTE'}, {name: 'Sul', key: 'SUL'}];
  selectedFilterRegion: any = null;

  first: number = 0;
  rows: number = 10;
  pageSize: number = 0;
  totalCount: number = 0;

  constructor(private insumoService: InsumoService) { }

  search(page: any) {
    this.insumoService.search(this.selectedFilterRegion.key, this.selectedFilterUser.key, page)
      .then(dados => {
        console.log(dados)
        this.clientes = dados.clients
        this.totalCount = dados.totalCount
        this.pageSize = dados.pageSize
      });
  }

  onPageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
      this.search(this.first);
  }

  ngOnInit(): void { 
    this.selectedFilterUser = this.filterUser[0];
    this.selectedFilterRegion = this.filterRegion[0];
  }

}
