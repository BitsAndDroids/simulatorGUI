import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OverlayServiceService {
  open = false;
  settingsVisibility: Subject<boolean> = new Subject<boolean>();
  public  setOpen(toSet:boolean){
    this.open = toSet;
  }
  public getOpen(){
    return this.open;
  }
  public toggleOpen(){
    this.settingsVisibility.next(!this.open);
  }
  constructor() {
    this.settingsVisibility.subscribe((value) => {
      this.open = value;
    });
  }
}
