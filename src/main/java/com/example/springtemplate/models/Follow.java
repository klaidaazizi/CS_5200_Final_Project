package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "follows")
public class Follow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "follow_id")
    public Integer id;
    @ManyToOne
    public Seller seller;
    @ManyToOne
    public Customer customer;
    public Date dateCreated;

    public Follow(Seller seller, Customer customer, Date dateCreated){
        this.dateCreated = dateCreated;
        this.seller = seller;
        this.customer = customer;
    }

    public Follow() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }
}
