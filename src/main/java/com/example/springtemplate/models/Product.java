package com.example.springtemplate.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="product_id")
    private Integer id;
    private String name;
    @Enumerated(EnumType.STRING)
    private Category category;
    private Float price;
    private Integer inventory;
    private Float weight;
    @Column(name= "age_group")
    private Integer ageGroup;

    @OneToMany(mappedBy = "product")
    @JsonIgnore
    public List<Order> orders;

    @ManyToOne
    @JoinColumn
    public Seller seller;

    @OneToOne(mappedBy = "product")
    @JsonIgnore
    public Discount discount;

    public Product(String name, Category category, Float price, Integer inventory, Float weight,
                   Integer ageGroup, List<Order> orders, Seller seller, Discount discount) {

        this.name = name;
        this.category = category;
        this.price = price;
        this.inventory = inventory;
        this.weight = weight;
        this.ageGroup = ageGroup;
        this.orders = orders;
        this.seller = seller;
        this.discount = discount;
    }

    public Product(){}

    public Integer getId() {
        return id;
    }

    public void setId(Integer productId) {
        this.id = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getInventory() {
        return inventory;
    }

    public void setInventory(Integer inventory) {
        this.inventory = inventory;
    }

    public Float getWeight() {
        return weight;
    }

    public void setWeight(Float weight) {
        this.weight = weight;
    }

    public Integer getAgeGroup() {
        return ageGroup;
    }

    public void setAgeGroup(Integer ageGroup) {
        this.ageGroup = ageGroup;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public Discount getDiscount() {
        return discount;
    }

    public void setDiscount(Discount discount) {
        this.discount = discount;
    }
}