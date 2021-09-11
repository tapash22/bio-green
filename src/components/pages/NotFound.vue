<template>
    <div class="notfound">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p>The page is not found</p>
                    <router-link to="/home">Go to Home page</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.notfound{
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 150px;
}
.row{
    padding-top: 20px;
    padding: 0;
    margin: 0;
    height: 400px;
}
.col-md-12{
    padding: 0;
    margin: 0;
}
.col-md-12 p{
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 20px;
}
.col-md-12 a{
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 700;
    cursor: pointer;
    color: #000;
}
</style>