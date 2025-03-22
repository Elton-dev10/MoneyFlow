package br.com.projetofinalturmaiv.apibanco.service;

import java.time.LocalDate;
import java.util.ArrayList;

import br.com.projetofinalturmaiv.apibanco.model.Conta;
import br.com.projetofinalturmaiv.apibanco.model.Movimentacao;

public interface IMovimentacaoService {

	public Movimentacao cadastrarNova(Movimentacao nova);

	public ArrayList<Movimentacao> recuperarTodasPorConta(Conta c);

	public ArrayList<Movimentacao> recuperarTodasPorPeriodo(int idConta, LocalDate dataInicio, LocalDate dataFinal);

	public boolean transferirValores(int contaOrigem, int contaDestino, double valor);

	public ArrayList<Movimentacao> recuperarPorPeriodoValor(LocalDate dataInicio, LocalDate dataFim, double valor);

}
