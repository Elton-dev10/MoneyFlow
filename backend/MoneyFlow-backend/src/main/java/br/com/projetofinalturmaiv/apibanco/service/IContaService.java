package br.com.projetofinalturmaiv.apibanco.service;

import java.util.ArrayList;

import br.com.projetofinalturmaiv.apibanco.model.Cliente;
import br.com.projetofinalturmaiv.apibanco.model.Conta;

public interface IContaService {
	public ArrayList<Conta> recuperarTodas();

	public Conta recuperarPeloId(int id);

	public ArrayList<Conta> recuperarPeloIdCliente(Cliente cliente);

	public Conta cadastrarNova(Conta conta);
	
	public Conta atualizarConta (Conta conta);
	
}
