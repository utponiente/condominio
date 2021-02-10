import { Component, OnInit } from '@angular/core';
import { Cita } from '../../cita.model';


@Component({
  selector: 'app-cita-create',
  templateUrl: './cita-create.component.html',
  styleUrls: ['./cita-create.component.css']
})
export class CitaCreateComponent implements OnInit {

//Variable accesible en la vista
  cita:Cita;//=new Cita("","","","", new Date());

  constructor() { }

  ngOnInit(): void {
    this.cita=new Cita("Carlos","Gabriel","","", new Date());
  }

  get diagnostic() {
    return JSON.stringify(this.cita);
  }

  guardarInformacion(){

    alert(JSON.stringify(this.cita));
    this.cita=new Cita("","","","", new Date());
  }
}
