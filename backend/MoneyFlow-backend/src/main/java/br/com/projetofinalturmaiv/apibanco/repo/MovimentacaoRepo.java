package br.com.projetofinalturmaiv.apibanco.repo;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;

import br.com.projetofinalturmaiv.apibanco.model.Conta;
import br.com.projetofinalturmaiv.apibanco.model.Movimentacao;

public interface MovimentacaoRepo extends CrudRepository<Movimentacao, Integer> {

	public ArrayList<Movimentacao> findByConta(Conta conta);

	public ArrayList<Movimentacao> findByContaAndDataBetween(Conta conta, LocalDate dataInicio, LocalDate dataFinal);
	
	public ArrayList<Movimentacao> findByValorGreaterThanEqualAndDataBetween (double valor, LocalDate dataInicio, LocalDate dataFinal);
}
