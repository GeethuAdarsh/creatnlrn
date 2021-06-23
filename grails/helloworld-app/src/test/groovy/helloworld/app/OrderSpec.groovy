package helloworld.app

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class OrderSpec extends Specification implements DomainUnitTest<OnlineOrder> {

    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
            true == false
    }
}
