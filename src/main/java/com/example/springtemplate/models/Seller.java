package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name = "sellers")
@PrimaryKeyJoinColumn(name = "userId")
public class Seller extends User{
    public String companyName;
    public Integer yearFounded;

    public Seller(String companyName, Integer yearFounded) {
        this.companyName = companyName;
        this.yearFounded = yearFounded;
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

}
