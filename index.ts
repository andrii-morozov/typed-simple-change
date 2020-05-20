export declare interface SimpleChanges {
    [propName: string]: SimpleChange;
}

export declare interface SimpleChange {
    previousValue: any;
    currentValue: any;
    firstChange: boolean;
    constructor(previousValue: any, currentValue: any, firstChange: boolean);
    /**
     * Check whether the new value is the first value assigned.
     */
    isFirstChange(): boolean;
}


export declare interface TypedSimpleChange<T> extends SimpleChange {
  previousValue: T;
  currentValue: T;

  constructor(previousValue: T, currentValue: T, firstChange: boolean);
}

export type TypedSimpleChanges<T> = {
  [P in keyof T]: TypedSimpleChange<T[P]>
}

interface OnChanges<T> {
  onChanges: (data: TypedSimpleChanges<T>) => void;
}

class Person {
  public name: string;
}

class PersonComponent implements OnChanges<Person> {
  public onChanges(data: TypedSimpleChanges<Person>) {
    console.log(data.name.currentValue)
  }
}