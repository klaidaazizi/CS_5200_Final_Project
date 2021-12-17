package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Cart;
import com.example.springtemplate.models.Discount;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DiscountRestRepository
        extends CrudRepository<Discount, Integer> {
    @Query(value = "SELECT * FROM discounts",
            nativeQuery = true)
    List<Discount> findAllDiscounts();

    @Query(value = "SELECT * FROM discounts WHERE discounts.discount_id=:id",
            nativeQuery = true)
    Discount findDiscountById(@Param("id") Integer id);

    @Query(value = "SELECT * FROM discounts WHERE discounts.product_id=:id",
            nativeQuery = true)
    List<Discount> findDiscountByProduct(@Param("id") Integer id);
}

