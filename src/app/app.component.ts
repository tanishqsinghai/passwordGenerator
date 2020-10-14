import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters=false;
  includeSymbols=false;
  includeNumbers=false;
  password='';
  length=0;
  onButtonClick(){
    const numbers='1234567890';
    const letters='abcdefghijklmnopqrstuvwxyz';
    const symbols='!@#$%^&*()_+=-<>?';
    let validChars='';
    if(this.includeLetters){
      validChars+=letters;
    }
    if(this.includeNumbers){
      validChars+=numbers;
    }
    if(this.includeSymbols){
      validChars+=symbols;
    }
    let finalPassword='';
    for(let i=0;i<this.length;i++)
    {
      const idx = Math.floor(Math.random() * validChars.length);
      finalPassword += validChars[idx];
    }
    this.password = finalPassword;
  }
  onCheckUseSymbols(){
     this.includeSymbols=!this.includeSymbols;
  }
  onCheckUseLetters(){
    this.includeLetters=!this.includeLetters;
  }
  onCheckUseNumbers(){
    this.includeNumbers=! this.includeNumbers;
  }
  onLength(value : string){
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue))
    {
      this.length = parsedValue;
    }
  }
}
