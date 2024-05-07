import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable ({ // Permet de créer un service
    providedIn: 'root' // Ajouté à la racine du projet 
})

export class FaceSnapService 
{
    faceSnaps: FaceSnap[] = 
    [{
        id: 1,
        title: 'TGV',
        description: 'TGV inOui sur la ligne Lyon-Paris !',
        imageUrl: 'https://t3.ftcdn.net/jpg/03/70/57/22/360_F_370572259_yHNnQCfvuyIi2p3FyyPckizBK8sST2PI.jpg',
        createdDate: new Date(),
        snaps: 246,
        location: 'Paris'
    },
    {
        id: 2,
        title: 'TER',
        description: 'TER circulant dans la région PACA.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/56_-_SNCF_TER_Alsace_510_at_Wissembourg%2C_August_6%2C_2010.jpg',
        createdDate: new Date(),
        snaps: 150,
        location: 'Technicentre de Marseille'
    },
    {
        id: 3,
        title: 'Train de marchandises',
        description: 'Train de marchandises transportant des matières premières.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Fret_SNCF_437023.JPG/1200px-Fret_SNCF_437023.jpg',
        createdDate: new Date(),
        snaps: 187
    },
    {
        id: 4,
        title: 'Locomotive à vapeur',
        description: 'Locomotive à vapeur 140C38 de 1913, affectée à la région Est SNCF.',
        imageUrl: 'https://www.trainvapeur.com/wordpress/wp-content/uploads/2014/02/essai-du-05-avril-2.jpg',
        createdDate: new Date(),
        snaps: 200,
        location: 'Est SNCF'
    }];

    getAllFaceSnaps () : FaceSnap[] // Permet de recup les FaceSnaps depuis un serveur par exemple
    {
        return this.faceSnaps; // On va retourner le tableau 
    }


    getFaceSnapById (faceSnapId : number) : FaceSnap 
    {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId); // Le find cherche si 2 iD concordent 
        if (!faceSnap)
        {
            throw new Error('FaceSnap not found !'); // On retourne une erreur 
        }
        else 
        {
            return faceSnap
        }
    }

    snapFaceSnapById (faceSnapId : number, snapType: 'snap' | 'unsnap') : void // Permet de recup les FaceSnaps depuis un serveur par exemple
    {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}


