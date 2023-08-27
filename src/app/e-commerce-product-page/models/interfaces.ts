export interface IGallaryItem{
    mainImage:string;
    thumbnailImage:string

}

export interface IthumbnailImage{
    image:string,
    selected:boolean
}

export interface IProductDetails{
    brandName:string,
    productName:string,
    productDescription:string,
    productPrice:number,
    discount:number
    productImage:string
    count?:number
}
export interface ICartItems{
    brandName:string,
    productName:string,
    productDescription:string,
    productPrice:number,
    discount:number
    productImage:string
    count:number
}