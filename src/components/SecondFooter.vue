<template>
    <div class="container-fluid px-0 py-5 bg-black">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    <p class="mb-0" style="color: rgba(255,255,255,.5);">
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        Copyright &copy;{{ year }} Todos Los Derechos Reservados | Desarrolado por ...<i
                            class="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com"
                            target="_blank">Colorlib.com</a>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'SecondFooter',
        components: {
            
        },
        data()
        {
            return{
                year: new Date().getFullYear()
            }
        }
    }
</script>


<style>
</style>