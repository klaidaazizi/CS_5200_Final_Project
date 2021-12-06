package com.example.springtemplate.models;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products")

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="product_id")
    private Integer productid;
    private String name;
    private Category category;
    private Float price;
    private Integer inventory;
    private Float weight;
    @Column(name= "age_group")
    private Integer ageGroup;

    @OneToMany(mappedBy = "product")
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

    public Integer getProductid() {
        return productid;
    }

    public void setProductid(Integer productid) {
        this.productid = productid;
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
