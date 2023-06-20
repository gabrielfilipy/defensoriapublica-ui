import { Component, OnInit } from '@angular/core';
import { InsumoService } from '../service/insumo.service';
import { ActivatedRoute } from '@angular/router';
import { Insumo } from '../model'; 

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  idUser = '';
  insumo = new Insumo();

  constructor(private insumoService: InsumoService, private rota: ActivatedRoute) { }

  search(id:any) {
    this.insumoService.searchForId(id)
      .then(dados => {
        this.insumo = dados;
      });
  }

  convertNumberPhoneInE16(number: any) {
    let newString = number.match(/[0-9]{0,14}/g);
  
    if (newString === null) {
      return '';
    }
  
    // Join parts returned from RegEx match
    newString = newString.join('');
  
    // Start number with "+"
    newString = '+' + newString;
  
    // Limit length to 15 characters
    newString = newString.substring(0, 15);
  
    return newString;
  }

  ngOnInit(): void {
    this.idUser = this.rota.snapshot.params['id'];
    this.search(this.idUser);
  }

}
