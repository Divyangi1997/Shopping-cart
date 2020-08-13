export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    //imageUrlArray: any[] = ['../../assets/bag1.jpg','../../assets/bag2.jpg','../../assets/bag3.jpg','../../assets/bag4.jpg','../../assets/bag5.jpg','../../assets/bag-25.jpg','../../assets/bag-on-slider-demo.png'] 

    constructor(id, name, description = '', price = 0, imageUrl)
    {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }
}
