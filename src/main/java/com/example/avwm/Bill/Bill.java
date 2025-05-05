package com.example.avwm.Bill;

import jakarta.persistence.*;
import com.example.avwm.Cart.Cart;
import com.example.avwm.User.User;

@Entity
@Table(name = "bill")
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long billId;

    @ManyToOne
    @JoinColumn(name = "cart_id", nullable = false)
    private Cart cart;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private int billQuantity;

    // Getters and Setters

    public Long getBillId() {
        return billId;
    }

    public void setBillId(Long billId) {
        this.billId = billId;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getBillQuantity() {
        return billQuantity;
    }

    public void setBillQuantity(int billQuantity) {
        this.billQuantity = billQuantity;
    }
}
