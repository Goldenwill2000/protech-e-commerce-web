import MilkImage from "../assets/images/full/milk.jpeg";
import ButterImage from "../assets/images/full/butter.jpeg";
import CheeseImage from "../assets/images/full/cheese.jpeg";
import YogurtImage from "../assets/images/full/yogurt.jpeg";
import BreadImage from "../assets/images/full/bread.jpeg";
import EggsImage from "../assets/images/full/eggs.jpeg";
import ChickenImage from "../assets/images/full/chicken.jpeg";
import AppleImage from "../assets/images/full/apple.jpeg";
import BananaImage from "../assets/images/full/banana.jpeg";
import CarrotImage from "../assets/images/full/carrot.jpeg";

export const DefaultModel = {
  id: 0,
};

export const ProductList = [
  {
    id: 1,
    name: "Butter",
    price: 1000,
    description: "This is the best butter",
    category: "Dairy",
    stock: 50,
    rating: 4.5,
    imageUrl: ButterImage,
    retailer: "Supermart",
    quantity: 1
  },
  {
    id: 2,
    name: "Milk",
    price: 1500,
    description: "Fresh and creamy milk",
    category: "Dairy",
    stock: 100,
    rating: 4.7,
    imageUrl: MilkImage,
    retailer: "Grocery Hub",
    quantity: 1
  },
  {
    id: 3,
    name: "Cheese",
    price: 1200,
    description: "Rich and flavorful cheese",
    category: "Dairy",
    stock: 30,
    rating: 4.6,
    imageUrl: CheeseImage,
    retailer: "Cheese Factory",
    quantity: 1
  },
  {
    id: 4,
    name: "Yogurt",
    price: 800,
    description: "Healthy and delicious yogurt",
    category: "Dairy",
    stock: 70,
    rating: 4.8,
    imageUrl: YogurtImage,
    retailer: "Supermart",
    quantity: 1
  },
  {
    id: 5,
    name: "Bread",
    price: 500,
    description: "Freshly baked bread",
    category: "Bakery",
    stock: 150,
    rating: 4.4,
    imageUrl:BreadImage,
    retailer: "Bakery House",
    quantity: 1
  },
  {
    id: 6,
    name: "Eggs",
    price: 200,
    description: "Organic and free-range eggs",
    category: "Poultry",
    stock: 200,
    rating: 4.9,
    imageUrl: EggsImage,
    retailer: "Farm Fresh",
    quantity: 1
  },
  {
    id: 7,
    name: "Chicken Breast",
    price: 2500,
    description: "Lean and tender chicken breast",
    category: "Meat",
    stock: 40,
    rating: 4.3,
    imageUrl: ChickenImage,
    retailer: "Meat Lovers",
    quantity: 1
  },
  {
    id: 8,
    name: "Apples",
    price: 300,
    description: "Crisp and sweet apples",
    category: "Fruits",
    stock: 120,
    rating: 4.6,
    imageUrl: AppleImage,
    retailer: "Supermart",
    quantity: 1
  },
  {
    id: 9,
    name: "Bananas",
    price: 200,
    description: "Ripe and nutritious bananas",
    category: "Fruits",
    stock: 180,
    rating: 4.5,
    imageUrl: BananaImage,
    retailer: "Grocery Hub",
    quantity: 1
  },
  {
    id: 10,
    name: "Carrots",
    price: 100,
    description: "Fresh and crunchy carrots",
    category: "Vegetables",
    stock: 130,
    rating: 4.7,
    imageUrl: CarrotImage,
    retailer: "Cheese Factory",
    quantity: 1
  }
];

export const ProductModel = {
  id: 1,
  name: "Butter",
  price: 1000,
  description: "This is the best butter",
  category: "Dairy",
  stock: 50,
  rating: 4.5,
  imageUrl: "https://example.com/images/butter.jpg",
  retailer: "Supermart",
  quantity: 1
};
