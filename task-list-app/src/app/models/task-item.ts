export class TaskItem {
  name: string;
  state: boolean;

  constructor(name: string, state: boolean) {
    this.name = name;
    this.state = state;
  }
}
