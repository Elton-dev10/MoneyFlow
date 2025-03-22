package br.com.projetofinalturmaiv.apibanco.request;

import br.com.projetofinalturmaiv.apibanco.model.Cliente;
import br.com.projetofinalturmaiv.apibanco.model.Conta;

import java.util.Collection;

public class ClienteRequest {
    private Cliente cliente;
    private Collection<Conta> contas;

    public ClienteRequest() {}

    public ClienteRequest(Cliente cliente, Collection<Conta> contas) {
        this.cliente = cliente;
        this.contas = contas;
    }

    public Collection<Conta> getContas() {
        return contas;
    }

    public void setContas(Collection<Conta> contas) {
        this.contas = contas;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }
}
