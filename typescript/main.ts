type Constructor<T = {}> = new (...args: any[]) => T;

function decorator<T>(constructor: Constructor) {
  console.log('class involked', constructor.name);
}

function logger<T>(
  target: any,
  method: string,
  descriptors: PropertyDescriptor
) {
  {
    let ogMethod = descriptors.value;
    descriptors.value = function (...args: any[]) {
      console.log(method + ' ' + 'was invoked');
      return ogMethod.call(this, ...args);
    };
  }
}

@decorator
class Base {
  constructor(public name: string) {}

  @logger
  getName(): string {
    return this.name;
  }
}

const base = new Base('Pranav');

console.log(base.getName());
