class ProductManager{
    constructor(){
        this.products = [];
    }

    static id = 0

    addProduct(title, description, price, thumbnail, code, stock){
        for(let i = 0; i < this.products.length;i++){
            if(this.products[i].code === code){
                console.log(`El codigo ${code} esta repetido`);
                break;
            }
        }

        const newProduct ={
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock,
        }


        if(!Object.values(newProduct).includes(undefined)){

            ProductManager.id++;
            this.products.push({...newProduct, 
                id:ProductManager.id});

        }else{
            console.log("Todos los campos son requeridos")
        }



    }

    getProduct(){
        return this.products;
    }

    existe (id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id){
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id)); 
    }
}

const productos =  new ProductManager();
//Primera llamada = arreglo vacío
console.log(productos.getProduct());

//Agregamos Producto
productos.addProduct('titulo1', 'descripcion1', 1000, "imagen1", "abc123", 5)
productos.addProduct('titulo2', 'descripcion2', 1000, "imagen2", "abc124", 6)

//Segunda llamada = arreglo con producto
console.log(productos.getProduct())

//Validación de CODE repetido
productos.addProduct('titulo3', 'descripcion3', 1000, "imagen3", "abc124", 7)

//Busqueda de producto por ID
productos.getProductById(2)

//Id not found
productos.getProductById(4)