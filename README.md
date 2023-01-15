# crud_products
Instrucciones:

Vas a crear una aplicación donde se puedan administrar productos a través de un CRUD.

Utiliza esta API  [https://documenter.getpostman.com/view/17877993/2s8Z76wpWA](https://documenter.getpostman.com/view/17877993/2s8Z76wpWA)  para consultar, crear, eliminar y actualizar dichos productos.

**Importante: Todos los endpoints terminan en un slash (/).**

- Crea un componente llamado “ProductsList” donde vas a listar todos los productos, mostrando su nombre, categoria, precio y disponibilidad. Adicionalmente colocarás dos botones, uno para eliminar, el cuál ejecutará un “delete” en la API para eliminar el producto seleccionado. Y uno para editar, el cuál pondrá toda la información del producto seleccionado en “ProductsForm”.
- 

![formProduct.JPG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ffff4d00-3253-4923-a537-677c4c356bd4/formProduct.jpg)

- Crear un componente llamado “ProductsForm” que será un formulario donde pondrás los inputs para llenar los siguientes datos:
    - Nombre del producto (“name”).
    - Categoria (”category”)
    - Precio (”price”)
    - Disponibilidad (”isAvailable”)
    
    ![listProducts.JPG](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a76be714-f413-4577-ac69-8fb456eb8991/listProducts.jpg)
    
    Al hacer submit, debes hacer una petición “post” para crear el nuevo producto. En caso de que haya algún producto para editar, la petición no sería de tipo “post” sino “put”, para editarlo.
    
- **Reto opcional**
    
    Mostrar un pop-up que diga si el producto fue creado / borrado / actualizado exitosamente, o uno en caso de haber un error.