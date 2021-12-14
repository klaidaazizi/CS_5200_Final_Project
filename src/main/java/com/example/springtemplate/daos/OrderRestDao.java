package com.example.springtemplate.daos;

import com.example.springtemplate.models.Order;
import com.example.springtemplate.models.Product;
import com.example.springtemplate.repositories.OrderRestRepository;
import com.example.springtemplate.repositories.ProductRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class OrderRestDao {
    @Autowired
    OrderRestRepository orderRepository;
    @Autowired
    ProductRestRepository productRepository;

    @GetMapping("/api/orders")
    public List<Order> findAllOrders(){
        return orderRepository.findAllOrders();
    }

    @GetMapping("/api/orders/productId/{id}")
    public List<Order> findOrdersByProduct(
            @PathVariable("id") Integer id){
        return orderRepository.findOrdersByProduct(id);
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
        newOrder.setShippedDate(order.getShippedDate());
        return orderRepository.save(newOrder);
    }

    @PostMapping("/api/orders/{id}")
    public Order addOrder(@RequestBody Order order,
                        @PathVariable("id") Integer id) {
        Product product = productRepository.findProductById(id);
        order.setProduct(product);
        return orderRepository.save(order);
    }

    @PutMapping("/api/orders/{id}")
    public Order updateOrder(
            @PathVariable("id") Integer id,
            @RequestBody Order orderUpdates) {
        Order order = orderRepository.findOrderById(id);
        order.setOrderId(orderUpdates.getOrderId());
        order.setCreatedDate(orderUpdates.getCreatedDate());
        order.setCart(orderUpdates.getCart());
        order.setCreatedDate(orderUpdates.getCreatedDate());
        order.setShippedDate(orderUpdates.getShippedDate());
        return orderRepository.save(order);
    }

}

