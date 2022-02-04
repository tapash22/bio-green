import Api from './Api';

export default{

    getOcations(){
        return Api().get('/events');
    },

    addOcations(gallery){
        return Api().post('/events/add',gallery);
    },

    deleteOcations(id){
        return Api().delete(`/events/delete/${id}`);
    },

    getEventid(id){
        return Api().get(`/events/edit/${id}`);
    }
}