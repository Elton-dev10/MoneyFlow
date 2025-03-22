package br.com.projetofinalturmaiv.apibanco.service;

import java.util.ArrayList;

import br.com.projetofinalturmaiv.apibanco.model.Cliente;

public interface IClienteService {
	public ArrayList<Cliente> recuperarTodos();

	public Cliente recuperarPeloId(int id);

	public Cliente cadastrarNovo(Cliente novo);

}
