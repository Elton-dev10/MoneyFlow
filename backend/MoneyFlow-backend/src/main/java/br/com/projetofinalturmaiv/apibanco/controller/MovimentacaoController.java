package br.com.projetofinalturmaiv.apibanco.controller;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.projetofinalturmaiv.apibanco.model.Conta;
import br.com.projetofinalturmaiv.apibanco.model.Movimentacao;
import br.com.projetofinalturmaiv.apibanco.service.IMovimentacaoService;

@RestController
public class MovimentacaoController {

	private static final LocalDate LocalDate = null;
	@Autowired
	private IMovimentacaoService service;

	@GetMapping("/movimentacao/{id}")
	public ResponseEntity<ArrayList<Movimentacao>> recuperarTodas(@PathVariable int id) {
		Conta conta = new Conta();
		conta.setNumeroConta(id);
		ArrayList<Movimentacao> m = service.recuperarTodasPorConta(conta);
		if (m != null) {
			return ResponseEntity.ok(m);
		}
		return ResponseEntity.notFound().build();
	}

	@PostMapping("/movimentacao")
	public ResponseEntity<?> cadastrarNova(@RequestBody Movimentacao novo) {
		if (novo.getData().isEqual(LocalDate.now()) && novo.getValor() > 0 && novo.getTipoMovimentacao() == 1
				|| novo.getData().isEqual(LocalDate.now()) && novo.getValor() > 0 && novo.getTipoMovimentacao() == -1) {
			Movimentacao res = service.cadastrarNova(novo);
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.badRequest().body("Dados inválidos. Transferencia não realizada");
	}

	@PostMapping("/transferencia")
	public ResponseEntity<?> cadastrarNova(@RequestParam("origem") int contaOrigem,
			@RequestParam("destino") int contaDestino, @RequestParam("valor") double valor) {
		if (valor <= 0) {
			return ResponseEntity.badRequest().body("O valor informado é inválido");
		}
		boolean res = service.transferirValores(contaOrigem, contaDestino, valor);
		if (res) {
			return ResponseEntity.ok("Transferência realizada com sucesso");
		} else {
			return ResponseEntity.badRequest().body("Conta de origem não tem saldo suficiente");
		}
	}

	@GetMapping("/extrato")
	public ResponseEntity<ArrayList<Movimentacao>> recuperarTodasPorPeriodo(@RequestParam("conta") int idConta,
			@RequestParam("datainicio") String dataInicio, @RequestParam("datafim") String dataFim) {
		ArrayList<Movimentacao> res = service.recuperarTodasPorPeriodo(idConta, LocalDate.parse(dataInicio),
				LocalDate.parse(dataFim));
		if (res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.notFound().build();

	}

	@GetMapping("/movimentacao")
	public ResponseEntity<ArrayList<Movimentacao>> recuperarPorPeriodoValor(@RequestParam("datainicio") String dataInicio,
			@RequestParam("datafim") String dataFim, @RequestParam("valor") double valor) {
		ArrayList<Movimentacao> res = service.recuperarPorPeriodoValor(LocalDate.parse(dataInicio),
				LocalDate.parse(dataFim), valor);
		if (res != null) {
			return ResponseEntity.ok(res);
		}
		return ResponseEntity.notFound().build();

	}
}
