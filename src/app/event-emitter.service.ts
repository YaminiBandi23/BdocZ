import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeAddAdminComponentFunction = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  onAddAdminButtonClick() {    
    this.invokeAddAdminComponentFunction.emit();    
  }    
}