package com.example.springtemplate.daos;

import com.example.springtemplate.models.Cart;
import com.example.springtemplate.models.Product;
import com.example.springtemplate.repositories.ProductRepository;
import com.example.springtemplate.repositories.SellerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductRestDao {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    SellerRestRepository sellerRepository;

    @PostMapping("/api/products")
    public Product createProduct(@RequestBody Product product) {
        Product newProduct = new Product();
        newProduct.setName(product.getName());
        newProduct.setAgeGroup(product.getAgeGroup());
        newProduct.setCategory(product.getCategory());
        newProduct.setPrice(product.getPrice());
        newProduct.setInventory(product.getInventory());
        return productRepository.save(newProduct);
    }

    @GetMapping("/api/products")
    public List<Product> findAllProducts() {
        return productRepository.findAllProducts();
    }

    @GetMapping("/api/products/{id}")
    public Product findProductById(
            @PathVariable("id") Integer id) {
        return productRepository.findProductById(id);
    }

    @GetMapping("/api/products/sellerId/{id}")
    public List<Product> findProductsBySeller(
            @PathVariable("id") Integer id){
        return productRepository.findProductsBySeller(id);
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