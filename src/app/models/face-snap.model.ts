export class FaceSnap 
{
  id!: number;
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  location?: string; // Le point d'interrogation permet de dire que la variable n'est pas obligée d'être initialisée
}