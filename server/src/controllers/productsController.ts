import {Request, Response } from 'express';

import pool from '../database';

class ProductsController{
    public async ListProducts (req: Request,res: Response){
        const productsList=await new Promise<any>((resolve, reject) => {
            pool.query('SELECT * FROM producto',
                (err: any, rows: any, fields: any) => {
                    if (err) reject(err); // En caso de error, resolvemos la Promise con error
                    resolve(rows); // Si no, resolvemos con el resultado
                });
        });
        res.json(productsList);
    } 

    public async getProduct(req: Request, res:Response){
        const product = await new Promise<any>((resolve, reject) => {
                pool.query('SELECT * FROM producto WHERE codigo = ?', [req.params.id],
                    (err: any, rows: any, fields: any) => {
                        if (err) reject(err); // En caso de error, resolvemos la Promise con error
                        resolve(rows); // Si no, resolvemos con el resultado
                    });
            });
        res.json(product);
    }

    public async create (req: Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO producto set ?', [req.body])
        res.json({message: 'Product saved'});
    }

    public async delete (req: Request, res:Response){
        await pool.query('DELETE FROM producto WHERE codigo = ?', [req.params.id])
        res.json({text: 'deleting product '+req.params.id});
    }

    public async update (req: Request, res:Response){
        await pool.query('UPDATE producto set ? WHERE codigo = ?',[req.body, req.params.id]);
        res.json({text: 'updating product '+req.params.id});
    }
}

const productController = new ProductsController();
export default productController;