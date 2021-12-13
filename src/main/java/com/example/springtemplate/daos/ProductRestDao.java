package com.example.springtemplate.daos;

import com.example.springtemplate.models.Cart;
import com.example.springtemplate.models.Product;
import com.example.springtemplate.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductRestDao {
    @Autowired
    ProductRepository productRepository;

    @PostMapping("/api/products")
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @GetMapping("/api/products")
    public List<Product> findAllProducts() {
        return productRepository.findAllProducts();
    }

    @GetMapping("/api/products/sellerId/{id}")
    public List<Product> findProductsBySeller(
            @PathVariable("id") Integer id){
        return productRepository.findProductsbySeller(id);
    }

    @GetMapping("/api/products/{productId}")
    public Product findProductById(
            @PathVariable("productId") Integer id) {
        return productRepository.findProductById(id);
    }

    @PutMapping("/api/products/{id}")
    public Product updateProduct(
            @PathVariable("id") Integer id,
            @RequestBody Product productUpdates) {
        Product product = productRepository.findProductById(id);
        product.setName(productUpdates.getName());
        product.setCategory(productUpdates.getCategory());
        product.setPrice(productUpdates.getPrice());
        product.setInventory(productUpdates.getInventory());
        product.setWeight(productUpdates.getWeight());
        product.setAgeGroup(productUpdates.getAgeGroup());
        return productRepository.save(product);
    }

    @DeleteMapping("/api/products/{id}")
    public void deleteProduct(
            @PathVariable("id") Integer id) {
        productRepository.deleteById(id);
    }


}