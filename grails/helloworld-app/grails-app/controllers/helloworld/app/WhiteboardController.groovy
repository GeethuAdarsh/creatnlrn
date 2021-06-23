package helloworld.app

class WhiteboardController {
    def calculationsService

    def index() { }

    def variables() {
        def myTotal=1
        render("Total : " + myTotal)
        render("<br>" + myTotal.class)
        myTotal = myTotal + 1
        render("<br>NewTotal :  " + myTotal + "<br>")

        def firstName="geethu"
        render("<br>Name : " + firstName)
        render("<br>" + firstName.class)
        firstName = firstName + 1
        render("<br>NewTotal :  " + firstName + "<br>")

        def today = new Date("022/06/2021")
        render("<br>Today : " + today)
        render("<br>" + today.class)
//        today = today + 1
//        render("<br>NewTotal :  " + today + "<br>")
    }

    def strings() {
        def first = "geethu"
        def last = "krishna"
        def fullName = "geethu krishna"
        def points = 5
        def input = "SHOUTING"
        render "Your name ${fullName} has ${fullName.length()} characters."
        render "<br> Please stop ${input.toLowerCase()}!"
    }

    def conditions() {
        def firstName = "Geethu krishna"
        def totalPoints = 4
        def welcomeMessage = ""
        if(totalPoints >=5) {
            welcomeMessage = "Welcome back ${firstName}. This drink is on us."
        }
        else if(totalPoints == 4){
            welcomeMessage = "Welcome back ${firstName}. Your next drink is free."
        }
        else {
            welcomeMessage = "Welcome back ${firstName}.You have ${totalPoints}."
        }
        render welcomeMessage
    }

    def switches() {
        //http://localhost:8080/whiteboard/switches/?first=geethu&points=9 - in url
        def welcomeMessage = calculationsService.welcome(params)
        render welcomeMessage
    }
}
