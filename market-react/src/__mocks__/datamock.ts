import { Product } from "../domain/products";

export const productMock: Product = { 
    id: 1,
    title: "productMock",
    description:  "productMock",
    category:  "productMock",
    price:2 ,
    discountPercentage:  2,
    rating:  2,
    stock:  2,
    tags:  ["beauty"],
    brand:  "string",
    sku:  "string",
    weight:  2,
    dimensions: {
        width: 2,
        height: 2,
        depth: 2,
      },
    warrantyInformation:  "string",
    shippingInformation:  "string",
    availabilityStatus:  "string",
    reviews: [ {
        rating: 2,
        comment: "string",
        date: "string",
        reviewerName: "string",
        reviewerEmail: "string",
      }],
    returnPolicy: "string",
    minimumOrderQuantity:  2,
    meta: {
        createdAt: "string",
        updatedAt: "string",
        barcode: "string",
        qrCode: "string",
      },
    thumbnail:  "string",
    images: ["beauty"]
  
};
export const productMock2: Product = { 
  id: 2,
  title: "productMock2",
  description:  "productMock2",
  category:  "productMock2",
  price: 3,
  discountPercentage:  2,
  rating:  2,
  stock:  2,
  tags:  ["beauty"],
  brand:  "string",
  sku:  "string",
  weight:  2,
  dimensions: {
      width: 2,
      height: 2,
      depth: 2,
    },
  warrantyInformation:  "string",
  shippingInformation:  "string",
  availabilityStatus:  "string",
  reviews: [ {
      rating: 2,
      comment: "string",
      date: "string",
      reviewerName: "string",
      reviewerEmail: "string",
    }],
  returnPolicy: "string",
  minimumOrderQuantity:  2,
  meta: {
      createdAt: "string",
      updatedAt: "string",
      barcode: "string",
      qrCode: "string",
    },
  thumbnail:  "string",
  images: ["beauty"]

};