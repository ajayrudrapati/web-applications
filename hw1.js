'use strict';

class Homework1 {
  static sum(a, b) {
    return a + b;
  }
}

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  calcArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Student {
  constructor(firstName, lastName, gpa, degreeType) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gpa = gpa;
    this.degreeType = degreeType;
    this.grade = undefined;
    this.graduated = false;
  }
}

class Product {
  constructor(productString) {
    const [name, price, availability] = productString.split(',');
    this.name = name;
    this.price = parseFloat(price);
    this.availability = availability;
  }

  static inStock(products) {
    return products.filter(product => product.availability === 'In Stock');
  }

  static halfOff(products) {
    return products.map(product => ({ ...product, price: product.price * 0.5 }));
  }

  static printProducts(products) {
    products.forEach(product => {
      const availabilityText = product.availability === 'In Stock' ? 'Yes' : 'No';
      console.log(`Product: ${product.name}, Cost: $${product.price.toFixed(2)}, Availability: ${availabilityText}`);
    });
  }
}

module.exports = {
  Homework1,
  Circle,
  Student,
  Product,
};
