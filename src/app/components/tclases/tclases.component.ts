import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tclases',
  templateUrl: './tclases.component.html',
  styleUrls: ['./tclases.component.scss'],
})
export class TclasesComponent implements OnInit {
  @Input() Npersonaje: string;
  @Input() tmiticas: any;
  @Input() tbanda: any;
  @Input() EBIS: any;

  //estadisticas principal
  @Input() EP: any;

  //rotacion uo = un objetivo  vo = varios objetivos
  @Input() UO: any;
  @Input() VO: any;

  //poder de azerita 1 y 2 principales resto secundarios
  @Input() PA1: any;    @Input() NPA1: String;
  @Input() PA2: any;    @Input() NPA2: string;
  @Input() PA3: any;    @Input() NPA3: string;
  @Input() PA4: any;    @Input() NPA4: string;
  @Input() PA5: any;    @Input() NPA5: string;
  
  //esencias
  @Input() E1: any; @Input() NE1: any;
  @Input() E2: any; @Input() NE2: any;
  @Input() E3: any; @Input() NE3: any;
  @Input() E4: any; @Input() NE4: any;
  @Input() E5: any; @Input() NE5: any;
  @Input() E6: any; @Input() NE6: any;
  @Input() E7: any; @Input() NE7: any;
  @Input() E8: any; @Input() NE8: any;
  

  //corrupcion
  @Input() C1: any; @Input() NC1: any;
  @Input() C2: any; @Input() NC2: any;
  @Input() C3: any; @Input() NC3: any;
  @Input() C4: any; @Input() NC4: any;

  //@Input() Ebis: any;
  constructor() { }

  ngOnInit() {}

}
