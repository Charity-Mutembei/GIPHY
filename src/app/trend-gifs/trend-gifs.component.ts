import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../gifs-data.service';

@Component({
  selector: 'app-trend-gifs',
  templateUrl: './trend-gifs.component.html',
  styleUrls: ['./trend-gifs.component.css']
})
export class TrendGifsComponent implements OnInit {
  gifs : any [] = [

  ];

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.dataService.getTrendingGifs();


  }
   

}
