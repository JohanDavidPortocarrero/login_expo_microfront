<template lang="html">
    <div class="cont_login">
        <div class="cont_form">
            <h2>Login</h2>
            <div class="cont_input">
                <input type="email" v-model="username" placeholder="Username" required />
                <input type="password" v-model="password" placeholder="Contraseña" required />
            </div>
            <button class="btn_ingresar" v-on:click="validar">Ingresar</button>
        </div>
    </div> 
</template>

<script>

    import axios from 'axios';
    import Swal from 'sweetalert2';

    export default{
        data() {
            return {
                username: '',
                password: ''
            };
        },
        methods: {
            async validar() {
                try {
                    const path = 'https://back-microfront.herokuapp.com/api/v1.0/api/login/'
                    let response = await axios.post(path, {
                        username: this.username,
                        password: this.password
                    })
                    if( response.data ){
                        Swal.fire(
                            this.username,
                            'welcome',
                            'success'
                        ).then(() => {
                            window.location.href = "https://stackoverflow.com/questions/35760943/how-can-i-enable-cors-on-django-rest-framework";
                        })
                    }
                    console.log(response.data)
                } catch (error) {
                    Swal.fire(
                        'Not found',
                        'user not found',
                        'error'
                    )
                    console.log(error)
                }
                
            }
        },
        //created(){
            //this.validar()
        //}
    }
</script>

<style>
.cont_login {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../../assets/istockphoto-1302561463-612x612.jpg');
    background-repeat: repeat;
    background-position: 0px 0px;
    background-size: cover;
}

.cont_form {
    width: 300px;
    height: 350px;
    border-radius: 20px;
    background: rgba(255,255,255,0.5);
    backdrop-filter: blur(2px);
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.cont_form h2 {
    font-size: 30px;
    font-weight: 800;
}

.cont_input {
    width: 90%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.cont_input input {
    width: 200px;
    height: 30px;
    margin: 0;
    background: rgba(255, 255, 255, 0.2);
    outline: none;
    padding: 5px 15px;
    border-radius: 35px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 13px;
    letter-spacing: 1px;
    color: rgb(22, 21, 21);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    margin: 5px 0px;
    background: white;
}

.btn_ingresar {
    padding: 10px 20px;
    border-radius: 10px;
    background: blue;
    color: white;
    border: none;
}

.btn_ingresar:hover {
    background: rgb(3, 3, 182);
    box-shadow: 0px 2px 5px rgba(0,0,0,0.5);
}

</style>