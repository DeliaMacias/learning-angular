import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {
  costosEnvio;

  constructor(
    private cartService: CartService
  ) {
    this.costosEnvio = this. cartService.getShippingPrices();
   }

  ngOnInit() {
  }

}
