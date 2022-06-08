# Angular Notes

- what are the differences between directives and decorators?
  - Directives changes the appearance/behavior of the layout of the DOM
  - Syntax: \*[directiveName]="[directive value or logic]"
    - There are three types of directives:
      - Structural directive:
        - Change the DOM layout by adding or removing DOM elements
        - 'ngIf', ''ngFor', 'ngSwitch'
      - Attribute directives
        - change the appearence or behavior of a particular element, component, or another directive
        - 'ngClass', 'ngStyle'
        - we can also build our own directives as attrivute directives
          example:
          The @Input decorator is another example of how we can create our own attribute directive - This decorator will mark a class field as an input property and supply
          configuration metadata - This input property will then bound to a DOM property with the template
      - Components
        - these are treated as directives because of the fact that they always have a template and only one component can be instantiated per an element in a template
        - subset of directives
  - Decorators:
    - These are similar in syntax and purpose when compared to annotation in Java. BUT THEY ARE NOT THE SAME.
    - Will denote any given class field, class, or module in Angular configuration metadata that the Angular framework will understand
    - Examples: @Component, @ngModel, @@Service, etc.
