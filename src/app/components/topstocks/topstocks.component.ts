import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';
import { StockInfo } from 'src/app/StockInfo';

@Component({
  selector: 'app-topstocks',
  templateUrl: './topstocks.component.html',
  styleUrls: ['./topstocks.component.css']
})
export class TopstocksComponent implements OnInit {
  StocksArray!: StockInfo[]; 
    isTop=false;
  constructor(private stockService: StocksService) { }

  ngOnInit(): void {
    this.isTop=true;
  }

   getTopLargeCapStocks(){
    this.stockService.TopLargeCapStocks().subscribe(
    resultArray=> this.StocksArray = resultArray,   
    error => console.log("error "+error)  
    )     
 }
   getTopMidCapStocks(){   
    this.stockService.TopMidCapStocks().subscribe(
    resultArray=> this.StocksArray = resultArray,   
    error => console.log("error "+error)  
    )       
  }
  getTopSmallCapStocks(){
 this.stockService.TopSmallCapStocks().subscribe(
    resultArray=> this.StocksArray = resultArray,   
    error => console.log("error "+error)  
    )   
  }

}
