import Product from "./Product"
const ProductsList = ({products, getUpPrepareUpdate, getUpPrepareDelete }) => {


    return(
        <ul>
            {
                products?.map( (product, index) => {
                    return <Product key={`user-${index}`}
                    product={product}
                    getUpPrepareDelete={getUpPrepareDelete}
                    getUpPrepareUpdate={getUpPrepareUpdate}
                    />
                }
                ) 
            }
        </ul>
    )

}

export default ProductsList