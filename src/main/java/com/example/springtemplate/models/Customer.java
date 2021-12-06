package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@DiscriminatorValue("2")
public class Customer extends User {
    public Integer age;
    public String profilePicture;
    @OneToMany (mappedBy = "customer")
    public Set<Follow> follows;

    public Customer(Integer age, String profilePicture, Set<Follow> follows) {
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

    public Set<Follow> getFollows() {
        return this.follows;
    }

    public void setFollows(Set<Follow> follows) {
        if (!(this.follows == null)) {
            this.follows.addAll(follows);
        }
    }

}
