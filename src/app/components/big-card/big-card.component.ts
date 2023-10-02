import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover: string = "https://conteudo.imguol.com.br/c/entretenimento/89/2020/11/12/audi-r8-v10-1605225032143_v2_750x421.jpg.webp"
  @Input()
  cardTitle: string = " "
  @Input()
  cardDescription: any = ""
  @Input()
  Id: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
