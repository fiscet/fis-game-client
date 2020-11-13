import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  private _text = '';
  private _type = 'light';
  private _duration = 3000;

  textUpdated = new EventEmitter();

  get text(): string {
    return this._text;
  }
  get type(): string {
    return this._type;
  }
  get duration(): number {
    return this._duration;
  }

  constructor() { }

  public msg(text: string, type = this._type, duration = this._duration) {
    this._text = text;
    this._type = type;
    this._duration = duration;

    this.textUpdated.emit();
  }
}
