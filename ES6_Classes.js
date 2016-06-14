{
  let AgePar = Symbol();
  let NamePar = Symbol();
  this.Human = class Human
  {

    constructor(name="Missing Name", age=30)
    {
      this[AgePar] = age;
      this[NamePar] = name;
    }

    Greetings(name="stranger") { return "Hi "+name+", my name is "+this[NamePar]; }
    get isAlive() { return this[AgePar]>-1; }
    get Hello() { return "Hi, my name is "+this[NamePar]; }
    set age(years=-1) { this[AgePar] = years; }
  }
}
Alex = new Human("Alex, The Hedgehog");


{
  let SexPar = Symbol();
  this.Male = class Male extends Human
  {
    constructor(name)
    {
        super(name);
        this[SexPar] = "male";
    }

    Greetings(name)
    {
      return super.Greetings(name)+"You know i'm no Super Man, right?";
    }
  }
}
SuperAlex = new Male("Alex, The Super Hedgehog");
SuperAlex.Greetings();
SuperAlex.age = undefined;
SuperAlex.isAlive;