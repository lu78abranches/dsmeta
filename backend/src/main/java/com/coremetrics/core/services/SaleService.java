package com.coremetrics.core.services;

import java.time.LocalDate;
import java.time.ZoneOffset;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.coremetrics.core.entities.Sale;
import com.coremetrics.core.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;

	public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable) {

		LocalDate today = LocalDate.now(ZoneOffset.UTC);

		LocalDate min = (minDate == null || minDate.isEmpty()) ? today.minusYears(1) : LocalDate.parse(minDate);
		LocalDate max = (maxDate == null || maxDate.isEmpty()) ? today : LocalDate.parse(maxDate);

		return repository.findSales(min, max, pageable);
	}
}
