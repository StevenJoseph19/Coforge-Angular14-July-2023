/* 1. Class Decorators
A class decorator is defined just before the class declaration,
and it tells about the class behaviors. 
A class decorator is applied to the constructor of the class. 
A class decorator can be used to observe, modify, or replace a class definition. 
If the class decorator returns a value, it will replace the class declaration with the given constructor function. */

// No parameters:
function ClassDecorator(
  target: Function // The class the decorator is declared on
) {
  console.log("ClassDecorator called on: ", target);
}

@ClassDecorator
class ClassDecoratorExample {}

// With parameters:

function ClassDecoratorParams(param1: number, param2: string) {
  return function (
    target: Function // The class the decorator is declared on
  ) {
    console.log(
      "ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ",
      target
    );
  };
}

@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")
class ClassDecoratorParamsExample {}

/* 2. Method Decorators
A Method Decorator is defined just before a method declaration. It is applied to a property descriptor for the method. 
It can be used to observe, modify, or replace a method definition. 
We cannot use method decorator in a declaration file.

The expression for the method decorator function accepts three arguments. They are:

1. Either the constructor function of the class for a static member or the prototype of the class for an instance member.
2. The member name.
3. The Property Descriptor for the member. */

function MethodDecorator(
  target: Object, // The prototype of the class
  propertyKey: string, // The name of the method
  descriptor: TypedPropertyDescriptor<any>
) {
  console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

class MethodDecoratorExample {
  @MethodDecorator
  method() {}
}

/* 3. Property Decorators
A property decorator is defined just before a property declaration. 
It is similar to the method decorators. The only difference between property decorators and method decorators 
is that they do not accept property descriptor as an argument and do not return anything.

The expression for the property decorator function accepts two arguments. They are:

1. Either the constructor function of the class for a static member or the prototype of the class for an instance member.
2. The member name. */

function PropertyDecorator(
  target: Object, // The prototype of the class
  propertyKey: string | symbol // The name of the property
) {
  console.log("PropertyDecorator called on: ", target, propertyKey);
}

class PropertyDecoratorExample {
  @PropertyDecorator
  name!: string;
}

/* 4. Parameter Decorators
A parameter decorator is defined just before a parameter declaration. It is applied to the function for a class constructor or method declaration. It cannot be used in a declaration file or in any other ambient context (such as in a declared class).

The expression for the parameter decorator function accepts three arguments. They are:

Either the constructor function of the class for a static member or the prototype of the class for an instance member.
The member name.
The index of the parameter in the function?s arguments list. */

function ParameterDecorator(
  target: Function, // The prototype of the class
  propertyKey: string | symbol, // The name of the method
  parameterIndex: number // The index of parameter in the list of the function's parameters
) {
  console.log(
    "ParameterDecorator called on: ",
    target,
    propertyKey,
    parameterIndex
  );
}

class ParameterDecoratorExample {
  method(
    @ParameterDecorator param1: string,
    @ParameterDecorator param2: number
  ) {}
}
