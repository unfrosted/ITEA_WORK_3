export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public capacity: number,
    public description?: string,
    public price?: number,
    public quantity?: number,
    public isAvailable?: boolean,
    public cdate?: string
  ) {}
}
