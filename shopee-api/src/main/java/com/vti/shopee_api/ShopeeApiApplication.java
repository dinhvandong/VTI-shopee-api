package com.vti.shopee_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class ShopeeApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopeeApiApplication.class, args);
	}

}
