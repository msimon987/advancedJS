function Dog(name) {
    
    if (name === undefined) {
        this.name = "Rex";
    } else {
        this.name = name;
    }
    this.getName = function() {
        return this.name;
    }
    //this.name = name || "Rex"; - this is the same as the above but simplified
}

var dog1 = new Dog();
console.log(dog1.name);

var dog2 = new Dog("Floki");
console.log(dog2.name);

var dog3 = new Dog();
console.log(dog3.getName());