import {Router} from 'express';
import productController from '../controllers/productsController';

class ProductsRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', productController.ListProducts);
        this.router.get('/:id', productController.getProduct);
        this.router.post('/', productController.create);
        this.router.delete('/:id', productController.delete);
        this.router.put('/:id', productController.update);
    }
}

const productsRoutes = new ProductsRoutes();

//Exportar unicamente el enrutador
export default productsRoutes.router;