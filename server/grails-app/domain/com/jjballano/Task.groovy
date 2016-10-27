package com.jjballano

class Task {

    String name
    Date expiryDate
    static constraints = {
        expiryDate nullable: true
    }
}
