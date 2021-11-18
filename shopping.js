const items = [
    {
        id: 1,
        item: "Milk",
        price: 25
    },
    {
        id: 2,
        item: "Eggs",
        price: 13
    },
    {
        id: 3,
        item: "Bread",
        price: 3
    },
    {
        id: 4,
        item: "Salmon",
        price: 7
    }
]



const addToShoppingList = (newItem, newPrice) => {
    const newID = items.length + 1
    const newItemObject = {
        id: newID,
        item: newItem,
        price: newPrice
    } 
    items.push(newItemObject)
    console.log(items)
}

addToShoppingList(`pizza`, 5)
addToShoppingList(`salad`, 3)

for (item of items){
    if(item.price > 8) 
    console.log(item)  
}


