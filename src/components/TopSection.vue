<template>
    <div class="hero-wrap img-top" >
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center">
                <div class="col-md-8 ftco-animate d-flex align-items-end fadeInUp ftco-animated">
                    <div class="text w-100 text-center">
                        <h1 class="mb-4"><span>Licorería</span></h1>
                        <div class="txt-zoom display-1">
                            <span style="color: #DAD302;">Pen</span>
                            <span style="color: #ffffff;">silv</span>
                            <span style="color: #029B1D;">ania</span>
                        </div>
                        <p>
                            <router-link to="/products" class="btn btn-primary py-2 px-4">Comprar</router-link>
                            <router-link to="/about" class="btn btn-white btn-outline-white py-2 px-4">Ver Más</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopSection',
    components: {
    }
}
</script>
    
<style>
    .img-top
    {
        background-image: url('../assets/images/bg-home.jpg');
    }

</style>
