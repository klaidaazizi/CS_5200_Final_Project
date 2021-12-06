package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.Set;

@Entity
@DiscriminatorValue("1")
public class Seller extends User {
    public String companyName;
    public Integer yearFounded;

    @OneToMany(mappedBy = "seller")
    public Set<Follow> follows;

    @OneToMany(mappedBy = "seller")
    public Set<Product> products;

    public Seller(String firstName, String lastName, String username, String password,
                  String email, String dateOfBirth, String streetAddress, String city,
                  String state, Integer zipCode, Integer phoneNumber,
                  String companyName, Integer yearFounded, Set<Follow> follows, Set<Product> products) {

        super(firstName, lastName, username, password, email, dateOfBirth,
                streetAddress, city, state, zipCode, phoneNumber);
        this.companyName = companyName;
        this.yearFounded = yearFounded;
        this.follows = follows;
        this.products = products;
    }

    public Seller() {}
    
    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public Integer getYearFounded() {
        return yearFounded;
    }

    public void setYearFounded(Integer yearFounded) {
        this.yearFounded = yearFounded;
    }

    public Set<Follow> getFollows() {
        return this.follows;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }

    public void setFollows(Set<Follow> follows) {
        if (!(this.follows == null)) {
            this.follows.addAll(follows);
        }
    }

}
