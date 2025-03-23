import { ContaDTO } from "./conta.model";

export interface MovimentacaoDTO {
    id?: number;
    data: Date;
    valor: number;
    tipoMovimentacao: string;
    descricao: string;
    conta: ContaDTO;
}    