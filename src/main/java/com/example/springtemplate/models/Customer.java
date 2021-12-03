package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "customers")
@PrimaryKeyJoinColumn(name = "userId")
public class Customer extends User {
    public Integer age;
    public String profilePicture;
    @ManyToMany (mappedBy = "customerList")
    public List<Seller> companiesFollowing;

    public Customer(Integer age, String profilePicture, List<Seller> companiesFollowing) {
        this.age = age;
        this.profilePicture = profilePicture;
        this.companiesFollowing = companiesFollowing;
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

    public List<Seller> getCompaniesFollowing() {
        return this.companiesFollowing;
    }

    public void addCompany(Seller seller) {
        this.companiesFollowing.add(seller);
    }
}
