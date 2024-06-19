export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('Typescript', 'darkblue');
  static readonly JAVA = new Tag('Java', 'green');
  static readonly NODEJS = new Tag('Nodejs', 'darkgreen');
  static readonly JAVASCRIPT = new Tag('Javascript', 'yellow');
  static readonly REACT = new Tag('React', 'blue');
  static readonly SPRING = new Tag('Spring', 'lightgreen');
  static readonly JPA = new Tag('JPA', 'gray');
  static readonly PYTHON = new Tag('Python', 'ligthgray');

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
