import { Injectable } from '@angular/core';
import {BehaviorSubject, interval, Observable} from 'rxjs';

export interface RoomTemperature {
  name: string;
  temperature: number;
}

@Injectable({
  providedIn: 'root'
})
export class RoomTemperatureService {
  public roomTemperatures$: BehaviorSubject<RoomTemperature> = new BehaviorSubject<RoomTemperature>({ name: '', temperature: 0 });

  constructor() {
    this.emitRandomRoomTemperature();
  }

  private emitRandomRoomTemperature(): void {
    setInterval(() => {
      const roomNames = ['Living Room', 'Bedroom', 'Kitchen'];
      const randomRoomIndex = Math.floor(Math.random() * roomNames.length);
      const chosenRoom = roomNames[randomRoomIndex];
      const newTemperature = Math.random() * 25 + 18;
      this.roomTemperatures$.next({ name: chosenRoom, temperature: newTemperature });
    }, 1000); // Update random room temperature every second
  }
}
