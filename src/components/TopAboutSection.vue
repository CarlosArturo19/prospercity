<template>
    <section class="hero-wrap hero-wrap-2 img-top">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-center">
                <div class="col-md-9 ftco-animate mb-5 text-center fadeInUp ftco-animated">

                    <p class="breadcrumbs mb-0">

                        <span class="mr-2">
                            <router-link to="/">Inicio</router-link>
                            <i class="fa fa-chevron-right"></i>
                        </span>

                        <!-- <span>
                            <a href="#Productos">{{ title }}</a>
                            <i class="fa fa-chevron-right"></i>
                        </span> -->

                    </p>
                    <h2 class="mb-0 bread">{{ title }}</h2>

                </div>
            </div>
        </div>
    </section>

</template>


<script>
    export default {
        name:'TopAboutSection',
        components:{ },
        props: ['title']
    }
</script>


<style>
.img-top {
    background-image: url('../assets/images/bg-home.jpg');
}
</style>