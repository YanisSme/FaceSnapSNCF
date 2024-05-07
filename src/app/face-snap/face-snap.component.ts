import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component ({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit 
{
  @Input() faceSnap!: FaceSnap; // Décorateur : Permet à un composant enfant d'accepter une valeur passée depuis son composant parent.
  buttonText!: string;

  constructor (private faceSnapsService : FaceSnapService) {} // Constructeur qui implémente les services

  ngOnInit () 
  {
    this.buttonText = 'Oh Snap!';
  }

  onSnap () 
  {
    if (this.buttonText === 'Oh Snap!') 
    {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } 
    else 
    {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
