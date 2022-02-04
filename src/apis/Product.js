import Api from './Api';

export default{

    getProduct(){
        return Api().get('/product');
    },

    addProduct(product){
        return Api().post('/product/add',product);
    },

    deleteProduct(id){
        return Api().delete(`/product/delete/${id}`);
    },

    downloadPdf(file){
        return Api().get(`/product/download/${file}`);
    },

    getEnzymes(){
        return Api().get('/product/enzymes');
    },

    getEssensialoil(){
        return Api().get('/product/essensialoil');
    },

    getFeedsanitizer(){
        return Api().get('/product/feedsanitizer');
    },

    getOrganicminarels(){
        return Api().get('/product/organicminarels');
    },

    getProbiotics(){
        return Api().get('/product/probiotics');
    },

    getEnzymesc(){
        return Api().get('/product/enzymesc');
    },

    getEssensialoila(){
        return Api().get('/product/essensialoila');
    },

    getProbioticsa(){
        return Api().get('/product/probioticsa');
    },

    getOrganicminarelsa(){
        return Api().get('/product/organicminarela');
    },

    getOrganicminarelsc(){
        return Api().get('/product/organicminarelc');
    },

    getProbioticsc(){
        return Api().get('/product/postbioticc');
    },

    getProductid(id){
        return Api().get(`/product/products/${id}`);
    }

}