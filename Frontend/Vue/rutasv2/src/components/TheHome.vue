<template>
    <div>   
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">Navbar</a>
                <form class="form-inline">
                    <button 
                    class="btn btn-outline-info my-2 my-sm-0"
                    type="submit"
                    @click.prevent="logOutUser"
                    >Salir
                    </button>
                </form>
        </nav>

        <ul class="list-group">
            <li class="list-group-item"><span>Name: </span> {{user.nombre}} </li>
            <li class="list-group-item"><span>Email: </span>{{user.email}}</li>
            
        </ul>
    

    </div>    
    
</template>

<script>

import VueJwtDecode from 'vue-jwt-decode'

export default {
    data(){
        return{
            user: {  }

        }
    },
    methods:{

        logOutUser(){
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            this.$router.push('/');
        },
        getUserData(){
            let token = localStorage.getItem('jwt');
            // let user = localStorage.getItem('user'); Se cambio por la informacion que entrega el token
            let user = VueJwtDecode.decode(token);
            console.log(user);
            // this.user = JSON.parse(user);
            this.user = user;
            console.log(this.user);
        }
    },
    
    created() {

        this.getUserData();

    }
    
}
</script>

<style scoped>

</style>