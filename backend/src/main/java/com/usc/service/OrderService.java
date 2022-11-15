package com.usc.service;

import java.util.Collection;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import com.usc.beans.Order;
import com.usc.beans.OrderProduct;
import com.usc.dao.OrderDao;
import com.usc.http.Response;

@Service
@Transactional
public class OrderService {
	@Autowired
	OrderDao orderDao;

	public List<Order> getOrders(Order order, Authentication authentication) {
		if(isAdmin(authentication.getAuthorities())) {
			return orderDao.findAll();
		} else {
			return orderDao.findAllByUser(order.getUser());
		}
	}

	public Response addOrder(Order order, Authentication authentication) {
		if((order.getUser().getUsername().equals(authentication.getName()) || isAdmin(authentication.getAuthorities()))) {
			for(OrderProduct op : order.getPurchases()) {
				if(op.getQuantity() > op.getProduct().getStock()) {
					return new Response(false, "Not enough Products in Stock");
				}
			}
			orderDao.save(order);
		}else {
			return new Response(false);
		}
		return new Response(true);
	}

	public Response editOrder(Order order) {
		Order o = orderDao.findById(order.getId()).get();
		o.setPurchase_Date(order.getPurchase_Date());
		for(OrderProduct op : order.getPurchases()) {
			if(op.getQuantity() > op.getProduct().getStock()) {
				return new Response(false, "Not enough Products in Stock");
			}
		}
		o.setPurchases(order.getPurchases());
		orderDao.save(o);
		return new Response(true);
	}
	
	public boolean isAdmin(Collection<? extends GrantedAuthority> profiles) {
		boolean isAdmin = false;
		for (GrantedAuthority profile : profiles) {
			if (profile.getAuthority().equals("ROLE_ADMIN")) {
				isAdmin = true;
			}
		}
		return isAdmin;
	}

}
