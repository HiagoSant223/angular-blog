import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://s2-autoesporte.glbimg.com/Ssul7-NhWPTSxd9EMR35SL0Xhvs=/0x0:940x628/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/k/X/Xbdzk4SGA518KgkWgC2A/2019-05-29-1-75.jpg"
  contentTitle:string = "FERRARI"
  contentDescription: string = "Olá Mundo"

  constructor() { }

  ngOnInit(): void {
  }

}
