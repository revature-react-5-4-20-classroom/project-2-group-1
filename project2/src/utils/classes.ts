export class objectWithFieldsForActorAndGenre {
  [k: string]: any;
  actorName: string;
  genreName: string;
  constructor(actorName: string, genreName: string) {
      this.actorName = actorName;
      this.genreName = genreName;
  }
}

