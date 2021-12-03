package com.example.springtemplate.models;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products")

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String name;
    private Category category;
    private float price;
    private int inventory;
    private float weight;
    private int ageGroup;


    @OneToMany
    private List<Order> orders;

    @ManyToOne
    private Seller seller;

    @ManyToOne
    private Discount discount;

    public Product(String name, Category category, float price, int inventory, float weight,
                   int ageGroup, List<Order> orders, Seller seller, Discount discount) {
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

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getInventory() {
        return inventory;
    }

    public void setInventory(int inventory) {
        this.inventory = inventory;
    }

    public float getWeight() {
        return weight;
    }

    public void setWeight(float weight) {
        this.weight = weight;
    }

    public int getAgeGroup() {
        return ageGroup;
    }

    public void setAgeGroup(int ageGroup) {
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
