import { Component } from '@angular/core';
import { LoggedUserDataService } from '../../../resources/logged-user-data.service';
import { Spacecraft } from '../../../Models/Spacecraft';
import { CommonModule } from '@angular/common';
import { PinataSDK } from 'pinata-web3';
import { env } from '../../../env';

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.css'
})
export class FleetComponent {
  spaceFleet : any;
  selectedSpacecraft! : Spacecraft;
  showSC : boolean = false;
  shipImageSRC : any;
  constructor(private loggedUserData : LoggedUserDataService){
    this.spaceFleet = loggedUserData.loggedUserModelInstance.ownedSpacecrafts;
  }

  async showSpacecraftInfo(U_SID : number){
    this.spaceFleet.forEach((element: any) => {
      if(element.U_SID == U_SID){
        this.selectedSpacecraft = element;
      }
    });

    const pinata = new PinataSDK({
      pinataJwt: env.JWT,
      pinataGateway: "brown-faithful-shrimp-92.mypinata.cloud",
    });
    
    const { data, contentType } = await pinata.gateways.get(
      this.selectedSpacecraft.imagePinata_CID
    )

    if (data instanceof Blob) {
      this.shipImageSRC = window.URL.createObjectURL(data);
    } else {
        console.error("Dane nie są typem Blob, nie można utworzyć URL.");
    }
    this.showSC = true;
  }

  getFleetStatistics() {
    let totalAttackPower = 0;
    let totalCapacity = 0;
    let hyperdriveCount = 0;

    this.spaceFleet.forEach((spacecraft: Spacecraft) => {
      totalAttackPower += spacecraft.attackPower;
      totalCapacity += spacecraft.capacity;
      if (spacecraft.hasHyperdrive) {
        hyperdriveCount++;
      }
    });

    return {
      totalAttackPower,
      totalCapacity,
      hyperdriveCount,
      totalShips: this.spaceFleet.length
    };
  }
}
