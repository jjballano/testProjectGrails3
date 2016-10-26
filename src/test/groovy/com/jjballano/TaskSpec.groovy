package com.jjballano

import grails.test.mixin.TestFor
import spock.lang.Specification

/**
 * See the API for {@link grails.test.mixin.domain.DomainClassUnitTestMixin} for usage instructions
 */
@TestFor(Task)
class TaskSpec extends Specification {

    def setup() {
    }

    def cleanup() {
    }

    void "name is not nullable"() {
        when: "is null"
            def task = new Task(expiryDate: new Date())
        then: "is not valid"
            !task.validate()
            
        when: "is not null"
            task = new Task(name: 'any', expiryDate: new Date())        
        then: "is valid"
            task.validate()
    }

    void "expiry date is nullable"() {
        when: "is null"
            def task = new Task(name: 'any')
        then: "is valid"
            task.validate()
            
        when: "is not null"
            task = new Task(name: 'any', expiryDate: new Date())        
        then: "is valid"
            task.validate()
    }
}
