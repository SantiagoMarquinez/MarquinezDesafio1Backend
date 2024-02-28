class Product {
    constructor(title, description, price, thumbnail, code, stock, id) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = id;
    }
}

class ProductManager {
    static id=0;
    constructor() {
        this.products = [];
    }

    //METODOS
    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("El producto no puede tener campos vacios");
            return;
        } else {
            const producExist = this.products.find(product => product.code === code);
            if (producExist) {
                console.log("Este producto ya fue cargado con anterioridad");
                return;
            } else {
                ProductManager.id++;
                const newProduct = new Product(title, description, price, thumbnail, code, stock, ProductManager.id);//esta linea y la siguiente van aca porque si las pongo al principio, cuando hay un producto con algun campo vacio se incrementa el id sin que se cree efectivamente el producto, en cambio si llego aca es porque ya paso los filtros.
                this.products.push(newProduct);
                console.log("¡Producto agregado con exito!");
            };
        };
    };

    getProducts() {
        if (this.products.length === 0) {
            console.log(this.products);
            console.log(`Aun no se cargaron productos`)
        } else {
            for (let i = 0; i < this.products.length; i++) {
                console.log(this.products[i]);
            }
        }
    }
    

    getProductById(id) {
        const productFound=this.products.find(producto => producto.id === id)
        if(!productFound){
            console.error(`El producto con el id ${id} no fue encontrado (Error 404 - Not Found)`)
        }else console.log(productFound);
    };

};

let manager = new ProductManager();
manager.getProducts();
manager.addProduct(`Mate`,`Yerba`, 3000, `thumbnail`, `03`, 10);
manager.addProduct(`Cafe`,`Cafecitooo`, 5000, `thumbnail2`, `034`, 10);
manager.addProduct(`palmitos`,undefined, 2000, `thumbnail3`, `56`, 10);
manager.addProduct(`Harina`,`harina 000`, 2000, `thumbnail3`, `000`, 10);
manager.getProducts();
manager.getProductById(`03`);
manager.getProductById(1);
