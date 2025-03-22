package br.com.projetofinalturmaiv.apibanco.service;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.projetofinalturmaiv.apibanco.model.Conta;
import br.com.projetofinalturmaiv.apibanco.model.Movimentacao;
import br.com.projetofinalturmaiv.apibanco.repo.MovimentacaoRepo;

@Component
public class MovimentacaoServiceImpl implements IMovimentacaoService {
	@Autowired
	private MovimentacaoRepo repo;

	@Autowired
	private IContaService service;
	

	@Override
	public ArrayList<Movimentacao> recuperarTodasPorConta(Conta c) {
		// TODO Auto-generated method stub
		return repo.findByConta(c);
	}

	@Override
	public Movimentacao cadastrarNova(Movimentacao nova) {
		// TODO Auto-generated method stub
		Conta c = service.recuperarPeloId(nova.getConta().getNumeroConta());
		if (c != null) {
			c.setSaldo(c.getSaldo() + nova.getValor() * nova.getTipoMovimentacao());
			service.atualizarConta(c);
			return repo.save(nova);
		}
		return null;

	}

	@Override
	public boolean transferirValores(int contaOrigem, int contaDestino, double valor) {
		Conta origem = service.recuperarPeloId(contaOrigem);
		Conta destino = service.recuperarPeloId(contaDestino);
		if (origem.getSaldo() >= valor) {
			origem.setSaldo(origem.getSaldo() + valor * -1);
			destino.setSaldo(destino.getSaldo() + valor);
			service.atualizarConta(origem);
			service.atualizarConta(destino);
			Movimentacao m1 = new Movimentacao();
			m1.setTipoMovimentacao(-1);
			m1.setConta(origem);
			m1.setData(LocalDate.now());
			m1.setValor(valor);
			m1.setDescricao("Transferência debitada da conta");
			Movimentacao m2 = new Movimentacao();
			m2.setTipoMovimentacao(1);
			m2.setConta(destino);
			m2.setData(LocalDate.now());
			m2.setValor(valor);
			m2.setDescricao("Transferência creditada na conta");
			repo.save(m1);
			repo.save(m2);
			return true;
		}
		return false;
	}

	@Override
	public ArrayList<Movimentacao> recuperarTodasPorPeriodo(int idConta, LocalDate dataInicio, LocalDate dataFinal) {
		Conta conta = service.recuperarPeloId(idConta);
		if (conta != null) {
			return repo.findByContaAndDataBetween(conta, dataInicio, dataFinal);
		}
		return null;
	}

	@Override
	public ArrayList<Movimentacao> recuperarPorPeriodoValor(LocalDate dataInicio, LocalDate dataFim, double valor) {
		return (ArrayList<Movimentacao>) repo.findByValorGreaterThanEqualAndDataBetween(valor, dataInicio, dataFim);	
	}

}
