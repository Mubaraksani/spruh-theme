export interface wishlist{
    id: number;
    img: string;
    rating: number;
    review: string;
    title: string;
    originalPrice: string;
    newPrice: string;   
}

export const WishlistList: wishlist[] = [
    {id: 1, img: './assets/img/pngs/1.png', rating: 4, review:'23', title: 'Women party wear dress', originalPrice:'$49.00', newPrice:'$39.00'},
    {id: 2, img: './assets/img/pngs/2.png', rating: 4, review:'64', title: 'Women casual wear dress.', originalPrice:'$30.00', newPrice:'$21.00'},
    {id: 3, img: './assets/img/pngs/3.png', rating: 4, review:'41', title: 'Women party black dress', originalPrice:'$29.00', newPrice:'$15.00'},
    {id: 4, img: './assets/img/pngs/4.png', rating: 4, review:'232', title: 'Women causal black dress', originalPrice:'$32.00', newPrice:'$22.00'},
    {id: 5, img: './assets/img/pngs/5.png', rating: 4, review:'143', title: ' Women shirt', originalPrice:'$30.00', newPrice:'$21.00'},
    {id: 6, img: './assets/img/pngs/6.png', rating: 5, review:'29', title: 'Women outfit', originalPrice:'$29.00', newPrice:'$15.00'},
    {id: 7, img: './assets/img/pngs/18.png', rating: 3, review:'20', title: 'smart band', originalPrice:'$49.00', newPrice:'$29.00'},
    {id: 8, img: './assets/img/pngs/14.png', rating: 4, review:'283', title: 'Black Backpack', originalPrice:'$30.00', newPrice:'$15.00'},
]