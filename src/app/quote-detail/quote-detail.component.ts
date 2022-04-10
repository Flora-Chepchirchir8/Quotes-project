import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  
@Input() quote!:Quote;
@Output() quoteIsDelete=new EventEmitter<boolean>();


deleteQuote(deleted:boolean){
  this.quoteIsDelete.emit(deleted);
}
likes=0;
upVote(){
  this.likes++;
}
dislikes=0;
downVote(){
  this.dislikes++;
}
  constructor() { }

  ngOnInit(): void {
  }

}
