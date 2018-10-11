export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public description?: string,
    public price?: number,
    public capacity?: number,
    public quantity?: number,
    public isAvailable?: boolean,
    public cdate?: string
  ) {}
}
