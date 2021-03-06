package helloworld.app

import grails.gorm.transactions.Transactional

@Transactional
class CalculationsService {

    def welcome(params) {
        def firstName = params.first
        def totalPoints = params.points.toInteger()
        def welcomeMessage = ""
        switch (totalPoints){
            case 5 : welcomeMessage = "Welcome back ${firstName}. This drink is on us."
                break
            case 4 : welcomeMessage = "Welcome back ${firstName}. Your next drink is free."
                break
            case 2..3 : welcomeMessage = "Welcome back ${firstName}.You have ${totalPoints}."
                break
            default: welcomeMessage = "Welcome ${firstName}. Thanks for registering."
                break
        }

    }

    def getTotalPoints(customerInstance){
        def totalAwards = 0
        customerInstance.awards.each{
            totalAwards = totalAwards + it.points
        }
        customerInstance.totalPoints = totalAwards
        return customerInstance
    }
}
