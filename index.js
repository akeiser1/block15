const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "Jak3Smith1993@email.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}

customer.email = "jak3Smith1992@email.com";
customer.phone = 3195511234;
customer.zipCode = 63132;
customer.favoriteFlavors = ["coffee", "strawberry", "matcha"];

['zipCode', 'favoriteStore'].forEach(favoriteStore => delete customer[favoriteStore]);

customer.favoriteToppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = "$5.32";

console.log(Object.keys(customer));