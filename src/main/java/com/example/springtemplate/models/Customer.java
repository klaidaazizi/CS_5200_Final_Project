package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@DiscriminatorValue("2")
public class Customer extends User {
    public Integer age;
    public String profilePicture;

    @OneToMany (mappedBy = "customer")
    @JsonIgnore
    public List<Follow> follows;

    @OneToMany(mappedBy = "customer")
    @JsonIgnore
    public List<Cart> carts;

    public Customer(Integer age, String profilePicture, List<Follow> follows) {
        this.age = age;
        this.profilePicture = profilePicture;
        this.follows = follows;
    }

    public Customer() {}

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    public List<Cart> getCarts() {
        return carts;
    }

    public void setCarts(List<Cart> carts) {
        this.carts = carts;
    }

    public List<Follow> getFollows() {
        return this.follows;
    }

    public void setFollows(List<Follow> follows) {
        if (!(this.follows == null)) {
            this.follows.addAll(follows);
        }
    }

}
