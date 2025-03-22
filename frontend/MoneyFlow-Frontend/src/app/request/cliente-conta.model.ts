import { ClienteDTO } from "../DTO/cliente.model";
import { ContaDTO } from "../DTO/conta.model";

export interface ClienteContaRequest {
    cliente:ClienteDTO;
    contas: ContaDTO[];
}