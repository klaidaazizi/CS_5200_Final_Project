package com.example.springtemplate.daos;

import com.example.springtemplate.models.Discount;
import com.example.springtemplate.models.Product;
import com.example.springtemplate.repositories.DiscountRepository;
import com.example.springtemplate.repositories.ProductRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class DiscountProductDao {
    DiscountRepository discountRepository;
    ProductRepository productRepository;

    @GetMapping("/addProduct/{productId}/toDiscount/{discountId}")
    public Discount addProductToDiscount(
            @PathVariable("productId") Integer productId,
            @PathVariable("discountId")Integer discountId) {
        Discount discount = discountRepository.findById(discountId).get();
        Product product = productRepository.findById(productId).get();
        discount.getProducts().add(product);
        product.setDiscount(discount);
        productRepository.save(product);
        return discount;
    }
}
