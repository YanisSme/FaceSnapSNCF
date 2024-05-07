import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit 
{
  faceSnaps!: FaceSnap[];

  constructor (private faceSnapsService : FaceSnapService) {} // Constructeur qui implémente les services

  ngOnInit(): void 
  {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps();
  }
}
