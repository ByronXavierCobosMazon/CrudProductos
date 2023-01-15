import {
    useState,
    useEffect
} from "react";
import axios from "axios";
import ProductsList from "./components/ProductsList";
import ProductsForm from "./components/ProductsForm";
import Success from "./components/Success";
import Error from "./components/Error";
import "./assets/styles/CrudProducts.css";

function CrudProducts()
{
    
    let [products, setProducts] = useState([]);   
    let [url, setUrl] = useState("https://products-crud.academlo.tech/products/");
    let [selectedProduct, selectAProduct] = useState(null);
    let [operation, setOperation] = useState(null);
    let [didOpOcurr, setDidOpOcurr] = useState(false);

   //Protocolo http
	const getProducts = () => {
            axios.get(url)
		.then(res => setProducts(res?.data))
		.catch(err => handleError(() => console.log(err), "Lectura de productos"));
	}

	// lectura de uno solo producto
	const getProduct = id => {
            axios.get(`${url}${id}`)
		.then(res => res?.data)
		.catch(err => handleError(() => console.log(err), "Lectura del producto"));
	}

	// Crea producto
	const createProduct = product => {
            axios.post(url, product)
		.then(() => handleSuccess(() => getProducts(), "Creación del producto"))
		.catch(err => handleError(() => console.log(err), "Creación del producto"));
	}

	// Actualiza producto
	const updateProduct = (id, updatedProduct) => {
            axios.put(`${url}${id}/`, updatedProduct)
		.then(() => handleSuccess(() => getProducts(url), "Actualización del producto"))
		.catch(err => handleError(() => console.log(err), "Actualización del producto"));
	}

	// Elimina producto
	const deleteProduct = id => {
            axios.delete(`${url}${id}/`)
		.then(() => handleSuccess(() => getProducts(url), "Eliminación del producto"))
		.catch(err => handleError(() => console.log(err), "Eliminación del producto"));
	}
    
    useEffect(() => {
        getProducts(url); 
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setOperation(null);
	}, 1000);
    }, [didOpOcurr]);

    
    const handleSuccess = (resolve, operationType) => {
        resolve();
	setDidOpOcurr(!didOpOcurr);
	setOperation(<Success operationType={operationType}/>);
    }

    
    const handleError = (reject, operationType) => {
        reject();
	setDidOpOcurr(!didOpOcurr);
	setOperation(<Error operationType={operationType}/>);
    }

    const handleProduct = product => {
        createProduct(product); 
    }

    const handleUpdatedProduct = product => {
        updateProduct(product.id, product); 
    }

    const prepareToUpdate = id => {
	
        selectAProduct(products.find(product => product.id === id)); 
    }

    return (
        <div id="crud-products">
	    <ProductsForm
	        getUpProduct={handleProduct}
	        getUpProductUpdated={handleUpdatedProduct}
	        getUpFieldsCleaned={() => selectAProduct(null)}
	        selectedProduct={selectedProduct}
	    />
	    {operation}
	    {
                Boolean(products?.length) && <ProductsList
                    getUpPrepareUpdate={prepareToUpdate}
		    getUpPrepareDelete={deleteProduct}
		    products={products}
		/>
	    }
	</div>
    );
}

export default CrudProducts;

