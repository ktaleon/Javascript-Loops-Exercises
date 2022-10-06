let objects = [
    {
        type: "Meats",
        list: ["Fish", "Chicken", "Pork", "Beef"],
    },

    {
        type: "Vegetables",
        list: ["Carrots", "Petchay", "Talong", "Sitaw"],
    },

    {
        type: "Soaps and Shampoos",
        list: ["Head n Shoulders", "Safeguard", "Dove", "Rejoice"],
    },
    
    {
        type: "Canned Goods",
        list: ["Corned Beef", "Sardines", "Spam", "Beef Loaf"],
    },
]


let objectContainer = ""
for (const object of objects) {
    objectContainer +=`
        <div id=border>
        <h3>${object.type}</h3>`
    for(let i = 0; i < 4; i++){
        objectContainer += `
            <input type="checkbox" id="list" name="item" value="">
            <label for="item">${object.list[i]}</label><br>
            `
    }
    objectContainer += `
    </div>
    <br>
    `
}

document.getElementById("container").innerHTML = objectContainer