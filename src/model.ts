export interface Todo {
  id: number;
  item:string;
  isDone: boolean;
}

interface EditPayload {
  id: number;
  item: string;
}
export type Actions = { type: "ADD"; payload: string } |
{ type: "REMOVE"; payload: number } |
{ type: "DONE"; payload: number } |
{ type: "EDIT"; payload: EditPayload }