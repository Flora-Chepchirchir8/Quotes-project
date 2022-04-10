import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quote=new Quote(0,'','','','',new Date());
@Output()addAQuote=new EventEmitter<Quote>();
addQuote(){
  this.addAQuote.emit(this.quote)
}
  constructor() { }

  ngOnInit(): void {
  }

}
