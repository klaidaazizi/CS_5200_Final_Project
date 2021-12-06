package com.example.springtemplate.daos;

import com.example.springtemplate.models.Seller;
import com.example.springtemplate.models.Product;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.SellerRestRepository;
import com.example.springtemplate.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SellerProductDao {
    @Autowired
    SellerRestRepository sellerRepository;
    ProductRepository productRepository;

    @GetMapping("/addProduct/{productId}/toSeller/{sellerId}")
    public Seller addProductToSeller(
            @PathVariable("productId") Integer productId,
            @PathVariable("sellerId")Integer sellerId) {
        Seller seller = sellerRepository.findById(sellerId).get();
        Product product = productRepository.findById(productId).get();
        seller.getProducts().add(product);
        product.setSeller(seller);
        productRepository.save(product);
        return seller;
    }
}
