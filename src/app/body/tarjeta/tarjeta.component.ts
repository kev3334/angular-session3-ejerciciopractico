import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() dataEntrante:any;
  constructor() { }

  ngOnInit(): void {
    
  }
}
