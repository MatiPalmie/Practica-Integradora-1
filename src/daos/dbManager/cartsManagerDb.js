import { cartModel } from "../../models/cart.models.js";

class cartDao {
    async createCart(){
        return await cartModel.find()
    }
    async getCart(data){
        return await cartModel.findById(data)
    }
    async addProduct(cid,pid)
}









