import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 quotes:Quote[] = [
    new Quote (1,'McKenzie','Technology',' “Technology is best when it brings people together.”','Arthur Mc',  new Date(2022,4,11)),
    new Quote (2,'Newton','Physics','"Energy is liberated matter, matter is energy waiting to happen.” ','Clinton Mark',new Date(2022,2,21)),
    
    
    
  ];
  displayInfo(index:number){
    this.quotes[index].showInfo=!this.quotes[index].showInfo;
  }
  deleteAquote(isdeleted:any,index:number){
    if(isdeleted){
      let check=confirm("Are you sure you want to delete this quote");
      if(check){
this.quotes.splice(index,1);
      }
    }

  }
  newQuote(quote:Quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.unshift(quote);
    
  }
  constructor() { }


  ngOnInit(): void {
  }

}
