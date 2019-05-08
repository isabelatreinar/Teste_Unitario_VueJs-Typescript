export class Campanha {
    public id?: number;
    public descricao?: string;
    public maximoParcelas?: number;
    public voltaDescontos?: boolean;
    public descontoJuros?: number;
    public descontoMulta?: number;
    public selecionada: boolean = false;
}
