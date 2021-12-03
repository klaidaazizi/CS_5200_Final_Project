package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "sellers")
@PrimaryKeyJoinColumn(name = "user_id")
public class Seller extends User{
    public String companyName;
    public Integer yearFounded;
    @ManyToMany
    @JoinTable(name = "follows",
    joinColumns = @JoinColumn(name="seller_id",
    referencedColumnName = "userId"),
    inverseJoinColumns = @JoinColumn(name = "customer_id",
    referencedColumnName = "userId"))
    public List<Customer> customerList;

    public Seller(String companyName, Integer yearFounded, List<Customer> customerList) {
        this.companyName = companyName;
        this.yearFounded = yearFounded;
        this.customerList = customerList;
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

    public List<Customer> getCustomerList() {
        return this.customerList;
    }

    public void addCustomer(Customer customer) {
        this.customerList.add(customer);
    }

}
