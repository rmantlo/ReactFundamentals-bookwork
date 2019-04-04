class User {
    //these parameters are the values we want to be passed in and stored in the object
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;

        //f, l, and email become the keywords, and we set the parameters as their values
    }
}
var userOne = new User('Paul', "O'Connor", "poconner@elevenfifty.org");
console.log(userOne.first); //this will be undefined, because the property doesnt exist. first is a parameter name but not a property of the object
console.log(userOne.f);//Paul
console.log(userOne.l);//Oconnor
console.log(userOne);//User {f:'Paul', l:'O\'Connor', email:'djfasjdf'}


class Car{
    constructor(make, model, year) {
        this.ma = make;
        this.mo = model;
        this.y = year;
    }
}
var firstCar = new Car('Toyota', 'Corolla', '1998');
console.log(firstCar);
var secondCar = new Car ('Honda', "Civic", "2007");
console.log(secondCar);
console.log(secondCar.model);//undefined
console.log(firstCar.y);