package com.example.avwm.Bill;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.example.avwm.Bill.BillRepository;
@Configuration
public class BillConfiguration {

    @Bean
    public BillService billService() {
        return new BillService();
    }
}
