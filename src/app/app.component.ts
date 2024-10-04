import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password='';
  //Design Pattern Angular
  /*
  user enter pwd length - event handler triggered which stores the value as a property in component
  user checks the 'Include letters' checkboxes - event handler store the value as a property in component class interface
  
  User clicks generate button
  Event handler triggered - we generate a pwd using the properties collected earlier

  We update password property in class instance which causes an update of the 'output' input
  */

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars='';
    if(this.includeLetters) validChars+= letters;
    if(this.includeNumbers) validChars+= numbers;
    if(this.includeSymbols) validChars+= symbols;

    let generatedPassword = '';

    for(let i=0; i<this.length; i++){
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index];
    }

    this.password = generatedPassword;

  }

  
  onChangeLength(eve:any){
    const parsedValue=parseInt(eve.target.value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
    else{
      this.length = 0;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

}
