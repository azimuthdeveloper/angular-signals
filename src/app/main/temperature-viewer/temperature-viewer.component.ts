import {Component, OnInit, signal} from '@angular/core';
import {RoomTemperatureService} from "../../services/room-temperature/room-temperature.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {TemperatureHistory, TemperatureNodeComponent} from "./temperature-node/temperature-node.component";
import {Subscription} from "rxjs";

// import {TemperatureGraphComponent} from "./temperature-graph/temperature-graph.component";

@Component({
  selector: 'app-temperature-viewer',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    TemperatureNodeComponent,
    // TemperatureGraphComponent
  ],
  templateUrl: './temperature-viewer.component.html',
  styleUrl: './temperature-viewer.component.scss'
})
export class TemperatureViewerComponent implements OnInit {

  historicalTemperatures = signal<Array<TemperatureHistory>>([]);
  temperatureSubscription: Subscription | undefined;

  constructor(public tempService: RoomTemperatureService) {
  }

  ngOnInit() {
    this.startSubscription();
  }

  resetTemperatures() {
    this.historicalTemperatures.set([]);
  }

  startSubscription(){
    this.temperatureSubscription = this.tempService.roomTemperatures$.subscribe(newTemp => {
      this.historicalTemperatures.update(x => {
        if (newTemp.temperature){
          let temperatureIndex = x.find(x => x.room == newTemp.name);
          if (temperatureIndex){
            temperatureIndex.temperatures = [newTemp.temperature, ...temperatureIndex.temperatures];
          }
          else{
            x = [...x, {room: newTemp.name, temperatures: [newTemp.temperature]}]
          }
        }
        return x;
      })
    });
  }

  endSubscription(){
    this.temperatureSubscription?.unsubscribe();
    // this.temperatureSubscription.clo
  }

  setStatic(){
    this.endSubscription();
    this.historicalTemperatures.set([
      {
        room: 'Loft',
        temperatures: [10,11,12,11,10.5]
      },
      {
        room: 'Guest room',
        temperatures: [13.5,14.5,12.5,12.8]
      },
      {
        room: 'Living room',
        temperatures: [15,16,15,14.3,12]
      }
    ])
  }
}
