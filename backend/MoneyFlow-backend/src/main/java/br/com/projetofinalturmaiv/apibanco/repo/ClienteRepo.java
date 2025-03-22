package br.com.projetofinalturmaiv.apibanco.repo;

import org.springframework.data.repository.CrudRepository;

import br.com.projetofinalturmaiv.apibanco.model.Cliente;

public interface ClienteRepo extends CrudRepository<Cliente, Integer> {
	
}
