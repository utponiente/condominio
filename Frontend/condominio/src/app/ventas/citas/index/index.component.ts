import { Component, OnInit } from '@angular/core';
import { Cita } from '../../cita.model';
import citas from './citas.json';
@Component({
  selector: 'app-cita-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public citaCollection:Cita[]=citas;
  constructor() { }

  ngOnInit(): void {
  }

}
