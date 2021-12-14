package com.example.springtemplate.daos;

import com.example.springtemplate.models.Cart;
import com.example.springtemplate.models.Order;
import com.example.springtemplate.models.Product;
import com.example.springtemplate.repositories.CartRestRepository;
import com.example.springtemplate.repositories.OrderRestRepository;
import com.example.springtemplate.repositories.ProductRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class OrderRestDao {
    @Autowired
    OrderRestRepository orderRepository;
    @Autowired
    ProductRestRepository productRepository;
    @Autowired
    CartRestRepository cartRepository;

    @GetMapping("/api/orders")
    public List<Order> findAllOrders(){
        return orderRepository.findAllOrders();
    }

    @GetMapping("/api/orders/productId/{id}")
    public List<Order> findOrdersByProduct(
            @PathVariable("id") Integer id){
        return orderRepository.findOrdersByProduct(id);
    }

    @GetMapping("/api/orders/cartId/{id}")
    public List<Order> findOrdersByCart(
            @PathVariable("id") Integer id){
        return orderRepository.findOrdersByCart(id);
    }

    @GetMapping("/api/orders/{id}")
    public Order findOrderById(
            @PathVariable("id") Integer id){
        return orderRepository.findOrderById(id);
    }

    @DeleteMapping("/api/orders/{id}")
    public void deleteOrder(
            @PathVariable("id") Integer id) {
        orderRepository.deleteById(id);
    }

    @PostMapping("/api/orders")
    public Order createOrder(@RequestBody Order order) {
        Order newOrder = new Order();
        newOrder.setCreatedDate(order.getCreatedDate());
        newOrder.setCart(order.getCart());
        newOrder.setCreatedDate(order.getCreatedDate());
        return orderRepository.save(newOrder);
    }

    @PostMapping("/api/orders/{productId}/{cartId}/{quantity}")
    public Order addOrder(@PathVariable("productId") Integer productId,
                          @PathVariable("cartId") Integer cartId,
                          @PathVariable("quantity") Integer quantity) {
        Product product = productRepository.findProductById(productId);
        Cart cart = cartRepository.findCartById(cartId);
        Order newOrder = new Order();
        Date date = new Date();
        newOrder.setCart(cart);
        newOrder.setProduct(product);
        newOrder.setCreatedDate(date);
        newOrder.setQuantity(quantity);
        return orderRepository.save(newOrder);
    }

    @PutMapping("/api/orders/{id}")
    public Order updateOrder(
            @PathVariable("id") Integer id,
            @RequestBody Order orderUpdates) {
        Order order = orderRepository.findOrderById(id);
        order.setCreatedDate(orderUpdates.getCreatedDate());
        order.setQuantity(orderUpdates.getQuantity());
        return orderRepository.save(order);
    }

}

