package br.com.projetofinalturmaiv.apibanco.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.projetofinalturmaiv.apibanco.model.Cliente;
import br.com.projetofinalturmaiv.apibanco.model.Conta;
import br.com.projetofinalturmaiv.apibanco.repo.ContaRepo;

@Component
public class ContaServiceImpl implements IContaService {

	@Autowired
	private ContaRepo repo;

	@Override
	public ArrayList<Conta> recuperarTodas() {
		// TODO Auto-generated method stub
		return (ArrayList<Conta>) repo.findAll();
	}

	@Override
	public Conta recuperarPeloId(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElse(null);
	}

	@Override
	public Conta cadastrarNova(Conta conta) {
		// TODO Auto-generated method stub
		return repo.save(conta);

	}

	@Override
	public ArrayList<Conta> recuperarPeloIdCliente(Cliente cliente) {
		// TODO Auto-generated method stub
		return repo.findByCliente(cliente);

	}

	@Override
	public Conta atualizarConta(Conta conta) {
		// TODO Auto-generated method stub
		if (conta.getNumeroConta()==0) {
			return null;
		}
		return repo.save(conta);
	}
}
