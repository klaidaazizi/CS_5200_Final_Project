package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Discount;
import com.example.springtemplate.models.Product;
import com.example.springtemplate.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DiscountRepository
        extends CrudRepository<Discount, Integer> {
    @Query(value = "SELECT * FROM discounts",
            nativeQuery = true)
    List<Discount> findAllDiscounts();

    @Query(value = "SELECT * FROM discounts WHERE id=:discountId",
            nativeQuery = true)
    Discount findDiscountById(@Param("discountId") Integer id);
}
