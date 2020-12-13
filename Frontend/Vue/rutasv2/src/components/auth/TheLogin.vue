<template>

<form>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" 
    class="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp"
    v-model="login.email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"
     class="form-control" 
     v-model="login.password"
     id="exampleInputPassword1">
  </div>

  <pre>
      {{login}}
  </pre>
 
  <button type="submit" 
  class="btn btn-primary"
  @click.prevent="loginUser"
  >Submit</button>
</form>
    
</template>


<script>
import swal from 'sweetalert';

export default {
    data() {

        return{
            login: {
                email:'',
                password:''

            }
        }
    },
    methods:{

        async loginUser(){
            try{

                // console.log(this.login);
                let response = await this.$http.post('/api/usuario/login', this.login);
                console.log(response.data);
                let token = response.data.tokenReturn;
                let user = response.data.user;

                localStorage.setItem('jwt', token);
                localStorage.setItem('user',JSON.stringify(user));

                if(token) {
                    swal("Login correcto", "Los datos son correctos, bienvenido!","success");
                    this.$router.push('/home');
                }
            }
            catch(error){
                swal("Ooops!","Algo salió mal!","error");
                console.log(error)
            }
                        

        }
    }    
}
</script>

<style scoped>

</style>
