package com.example.springtemplate.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "discounts")
public class Discount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer discountId;
    private String title;
    private String description;
    @Column(name="start_date")
    private String startDate;
    @Column(name="end_date")
    private String endDate;
    private Integer percent;

    @OneToOne(mappedBy = "discount")
    private Product product;

    public Discount(Integer discountId, String title, String description, String startDate, String endDate, Integer percent, Product product) {
        this.discountId = discountId;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.percent = percent;
        this.product = product;
    }

    public Discount() {
    }

    public Integer getDiscountId() {
        return discountId;
    }

    public void setDiscountId(Integer discountId) {
        this.discountId = discountId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }


    public void setPercent(Integer percent) {
        this.percent = percent;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }


}