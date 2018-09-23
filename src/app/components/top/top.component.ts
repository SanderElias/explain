import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  onHover = function() {
    console.log(this.route.parent);
  }

  ngOnInit() {
    //console.log(this.appRouter);
  }

}
