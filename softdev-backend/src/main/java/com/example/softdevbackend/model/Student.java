package com.example.softdevbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email_id")
    private String emailId;

    public Object getFirstName() {
        return null;
    }

    public void setFirstName(Object firstName2) {
    }

    public Object getEmailId() {
        return null;
    }

    public void setEmailId(Object emailId2) {
    }

    public Object getLastName(){
        return null;
    }
    
    public void setLastName(Object firstName2) {
    }

    
}
