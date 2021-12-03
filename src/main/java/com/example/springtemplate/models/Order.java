package com.example.springtemplate.models;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String createdDate;
    private String shippedDate;

    @ManyToOne
    private Product product;

    @ManyToOne
    private Cart cart;

    public Order(String createdDate, String shippedDate, Product product, Cart cart) {
        this.createdDate = createdDate;
        this.shippedDate = shippedDate;
        this.product = product;
        this.cart = cart;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getShippedDate() {
        return shippedDate;
    }

    public void setShippedDate(String shippedDate) {
        this.shippedDate = shippedDate;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }
}
