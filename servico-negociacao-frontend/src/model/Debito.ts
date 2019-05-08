export class Debito {
    public id?: number;
    public periodo?: string;
    public parcela?: number;
    public matricula?: number;
    public curso?: string;
    public valorOriginal?: number;
    public mora?: number;
    public multa?: number;
    public total?: number;
    public vencimento?: string;
    public selected: boolean = true;
}
