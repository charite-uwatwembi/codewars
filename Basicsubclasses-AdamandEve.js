// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 
// containing objects (representing Adam and Eve). 
// The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. 
// Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

class Human {
    constructor(name) {
        this.name = name;
    }

    
    display() {
        console.log(`This is a ${this.constructor.name} named ${this.name}`);
    }
}

class Man extends Human {
    constructor(name) {
        super(name);
    }
}

class Woman extends Human {
    constructor(name) {
        super(name);
    }
}

class God {
    static create() {
        const adam = new Man("Adam");
        const eve = new Woman("Eve");
        return [adam, eve];
    }
}


let creation = God.create();


creation.forEach((person) => person.display());
