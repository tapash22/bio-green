import Api from './Api';

export default{

    getBlog(){
        return Api().get('/blog');
    },

    addBlog(gallery){
        return Api().post('/blog/add',gallery);
    },

    deleteBlog(id){
        return Api().delete(`/blog/delete/${id}`);
    },

    getBlogid(id){
        return Api().get(`/blog/blogs/${id}`);
    }
}