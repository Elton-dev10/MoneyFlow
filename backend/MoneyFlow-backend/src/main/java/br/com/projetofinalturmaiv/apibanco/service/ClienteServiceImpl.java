package br.com.projetofinalturmaiv.apibanco.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.projetofinalturmaiv.apibanco.model.Cliente;
import br.com.projetofinalturmaiv.apibanco.repo.ClienteRepo;

@Component
public class ClienteServiceImpl implements IClienteService {

	@Autowired
	private ClienteRepo repo;

	@Override
	public ArrayList<Cliente> recuperarTodos() {
		// TODO Auto-generated method stub
		return (ArrayList<Cliente>) repo.findAll();
	}

	@Override
	public Cliente recuperarPeloId(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElse(null);
	}

	@Override
	public Cliente cadastrarNovo(Cliente novo) {
		// TODO Auto-generated method stub
		return repo.save(novo);
	}

}
