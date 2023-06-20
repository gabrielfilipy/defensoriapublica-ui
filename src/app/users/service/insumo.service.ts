import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})  
export class InsumoService {

    insumos = [];

    constructor(private http: HttpClient) { }

    search(region:any, type:any, page:any) {
        return this.http.get(`http://localhost:8081/insumo/listar?classificacao=${type}&regiao=${region}&page=${page}`)
            .toPromise()
            .then((response: any) => {
                const clients = response['content'];
                const resultado = {
                    clients,
                    totalCount: response['totalCount'],
                    pageSize: response['pageSize']
                };
                
                return resultado
            });
    }

    searchForId(id:any) {
        return this.http.get(`http://localhost:8081/insumo/search/${id}`)
            .toPromise()
            .then((response: any) => {
                return response
            });
    }

}