<template>
    <section class="ftco-section">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="row mb-4">
                        <div class="col-md-12 d-flex justify-content-between align-items-center">
                            <h4 class="product-select">Select Types of Products</h4>
                            <select class="selectpicker" multiple>
                                <option>Brandy</option>
                                <option>Gin</option>
                                <option>Rum</option>
                                <option>Tequila</option>
                                <option>Vodka</option>
                                <option>Whiskey</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="row mt-5">
                        <div class="col text-center">
                            <div class="block-27">
                                <ul>
                                    <li><a href="#">&lt;</a></li>
                                    <li class="active"><span>1</span></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">&gt;</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="sidebar-box ftco-animate">
                        <div class="categories">
                            <h3>Product Types</h3>
                            <ul class="p-0">
                                <li><a href="#">Brandy <span class="fa fa-chevron-right"></span></a></li>
                                <li><a href="#">Gin <span class="fa fa-chevron-right"></span></a></li>
                                <li><a href="#">Rum <span class="fa fa-chevron-right"></span></a></li>
                                <li><a href="#">Tequila <span class="fa fa-chevron-right"></span></a></li>
                                <li><a href="#">Vodka <span class="fa fa-chevron-right"></span></a></li>
                                <li><a href="#">Whiskey <span class="fa fa-chevron-right"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: 'ListProductSection',
    components: {
    }
}
</script>


<style>
    .img-ListProductSection{
        background-image: url('../assets/images/prod-1.jpg');
    }
</style>