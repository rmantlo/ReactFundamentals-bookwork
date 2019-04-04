//ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = "trial user";
    }
    //method 1
    greet(){
        console.log('Welcome Back, '+ this.name);
    }
    //method 2
    status(){
        console.log('Current status: '+ this.type);
    }
}
//Extends
class TrialUser extends User {
    trialEnding(){
        console.log('Your trial will be ending soon, ' +this.name+'.'+' Would you like to join our program?');
    }
}

//Instance of User class
var anonDude = new User('anonymous');
anonDude.greet();
anonDude.status();
//anonDude.trialEnding(); this creates an error! parent class cannot use child class methods

//Instance of TrialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();
//trialuser is a child of user class, and can use it's methods, however the parent cannot use the child's method 'trialending'

class BannedUser extends User{
    banned(){
        console.log(this.name+', You have been Banned for Hacking');
    }
}

let bannedUser = new BannedUser('Nathan');
bannedUser.greet();
bannedUser.banned();
//bannedUser.trialEnding(); error, is a child of User class, but cannot access other children of same parent, only that of the parent