package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    public Integer id;
    @Column(name="date_created")
    public Date createdDate;
    @Column(name = "quantity")
    public Integer quantity;

    @ManyToOne
    @JoinColumn(name = "product_id")
    public Product product;

    @ManyToOne
    @JoinColumn(name = "cart_id")
    public Cart cart;

    public Order(Date createdDate, Product product, Cart cart, Integer quantity) {
        this.createdDate = createdDate;
        this.product = product;
        this.cart = cart;
        this.quantity = quantity;
    }

    public Order() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
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

    public Integer getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

}
