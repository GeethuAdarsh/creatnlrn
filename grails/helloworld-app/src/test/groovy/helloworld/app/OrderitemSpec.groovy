package helloworld.app

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class OrderitemSpec extends Specification implements DomainUnitTest<OrderItem> {

    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
            true == false
    }
}
