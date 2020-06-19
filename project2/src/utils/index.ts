import { objectWithFieldsForActorAndGenre } from "./classes";

export function objectArrayToStringArray(fieldName: String, objectArray: objectWithFieldsForActorAndGenre[]): string[] {
  let result: string[] = [];
  for (let item of objectArray) {
      if (fieldName === "actorName") {
          result.push(item.actorName)
      }
      if (fieldName === "genreName") {
          result.push(item.genreName)
      }
  }
  return result; 
}