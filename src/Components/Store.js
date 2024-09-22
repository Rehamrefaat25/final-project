
import {create} from 'zustand';

const Store = create((set) => ({
    items: [
        { id: 1, title: "High Quality", details: "Crafted from top materials" ,image:"/assets/1.jpg"},
        { id: 2, title: "Warranty Protection", details: "Over 2 years",image:"/assets/4.jpg" },
        { id: 3, title: "Free Shipping", details: "Order over $150",image:"/assets/2.jpg" },
        { id: 4, title: "24/7 Support", details: "Dedicated support",image:"/assets/3.jpg" }
    ],
}));

export default Store;

