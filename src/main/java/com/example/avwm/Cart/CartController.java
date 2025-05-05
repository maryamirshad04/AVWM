package com.example.avwm.Cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public Cart addItemToCart(@RequestBody Cart cart) {
        return cartService.addItemToCart(cart);
    }

    @GetMapping("/user/{userId}")
    public List<Cart> getCartItemsByUser(@PathVariable int userId) {
        return cartService.getCartItemsByUserId(userId);
    }
}

