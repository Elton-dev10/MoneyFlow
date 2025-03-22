package br.com.projetofinalturmaiv.apibanco.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_movimentacao")
public class Movimentacao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "num_seq")
	private int numeroMovimentacao;

	@Column(name = "data_operacao")
	private LocalDate data;

	@Column(name = "valor")
	private double valor;

	@Column(name = "tipo_operacao")
	private int tipoMovimentacao;

	@Column(name = "descricao")
	private String descricao;

	@ManyToOne
	@JoinColumn(name = "numero_conta")
	private Conta conta;

	public int getNumeroMovimentacao() {
		return numeroMovimentacao;
	}

	public void setNumeroMovimentacao(int numeroMovimentacao) {
		this.numeroMovimentacao = numeroMovimentacao;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public int getTipoMovimentacao() {
		return tipoMovimentacao;
	}

	public void setTipoMovimentacao(int tipoMovimentacao) {
		this.tipoMovimentacao = tipoMovimentacao;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Conta getConta() {
		return conta;
	}

	public void setConta(Conta numeroConta) {
		this.conta = numeroConta;
	}

}
