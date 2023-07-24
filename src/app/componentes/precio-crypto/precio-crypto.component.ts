import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-precio-crypto',
  templateUrl: './precio-crypto.component.html',
  styleUrls: ['./precio-crypto.component.css']
})
export class PrecioCryptoComponent implements OnInit{
  constructor(private http: HttpClient){ }
  venta:any
  compra:any

  bigDataCompra(){
    fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=ARS`)
    .then(resultado => resultado.json())
    .then((datos:any) => this.compra=(precioCompra(datos.RAW.USDT.ARS.PRICE)))
    .catch( e => console.log(e))
  }
  bigDataVenta(){
    fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=USDT&tsyms=ARS`)
    .then(resultado => resultado.json())
    .then((datos:any) => this.venta=(precioVenta(datos.RAW.USDT.ARS.PRICE)))
    .catch( e => console.log(e))
  }
  imprimir=()=>{this.bigDataCompra(),this.bigDataVenta()}

  ngOnInit(): void {
    this.bigDataCompra();
    this.bigDataVenta();
    setInterval(this.imprimir,1000);
  }
  
}

let precioCompra= function cotizacionCompra(data:any) {
    return data + (data * 1/100)
}

let precioVenta= function cotizacionVenta(data:any) {
  return data - (data * 5.5/100)
}

