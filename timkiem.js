const apiEndpoint ="http://localhost:3000/product";
const display= document.querySelector("#data-output")
const input = document.querySelector("#input");

const getData = async () => {
    const res = await fetch(apiEndpoint);
    const data = await res.json();
    
    return data;
}

const displayProduct = async () => {
    let query = input.value;
    const payload = await getData();

    let dataProduct = payload.filter((evenData) => {
        if(query === "") {return evenData}
        else if (evenData.name.toLowerCase().includes(query.toLowerCase())) {return evenData}
    }).map((object) => {
        const {name, price, image} = object;
        return `
        <tbody>
            <tr>
                <td><img style="width: 70px;" src="${image}" alt="${name}"></td>
                <td><a href="">${name}</a></td>
                <td>${price}</td>
            </tr>
        </tbody>
        `;
    });
    

    display.innerHTML = dataProduct.join('');
}

input.addEventListener("input", async () => {
    if (input.value === ""){
        document.getElementById("thongtin").style.display = "none";
    } else {
        await displayProduct();
        document.getElementById("thongtin").style.display = "block";
    }
});

displayProduct();
