<template>
    <section class="sign-in mt-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="signin-form col-md-6">
                    <h2 class="form-title text-center">Iniciar Sesión</h2>
                    <form class="register-form" id="login-form">
                        <div class="form-group">
                            <input class="form-control" type="text" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" placeholder="Contraseña">
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <input type="checkbox" name="remember-me" id="remember-me"  />
                                    <label for="remember-me" class="label-agree-term"><span><span></span></span>Remember
                                        me</label>
                                </div>
                                <div class="col-6">
                                    <a href="">Olvide mi contraseña</a>
                                </div>
                            </div>
                        </div>
                        <div class="form-group form-button text-center">
                            <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
                        </div>
                    </form>

                    <div class="social-login">
                        <span class="social-label">
                            <a href="">Registrarme, </a>
                            Or login with
                        </span>
                        <ul class="socials">
                            <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="display-flex-center zmdi zmdi-google fa fa-google"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
    @import url(../../assets/login/css/style.css);
</style>