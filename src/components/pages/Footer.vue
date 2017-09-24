<template>
    <div id="shaper-footer" class="sharper-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <p><i class="fa fa-home" aria-hidden="true"></i> 123, Westlands </p>
                    <p><i class="fa fa-envelope" aria-hidden="true"></i> info@sharper.net</p>
                    <p><i class="fa fa-globe" aria-hidden="true"> www.sharper-innovations.co.ke</i></p>
                </div>
                <div class="col-lg-6 col-md-6">
                    <h3 class="unique-footer">Social Media</h3>
                    <i class="social fa fa-facebook" aria-hidden="true"></i>
                    <i class="social fa fa-twitter" aria-hidden="true"></i>
                    <i class="social fa fa-linkedin" aria-hidden="true"></i>
                    <i class="social fa fa-pinterest" aria-hidden="true"></i> <br> <br>
                    <p class="myfooter">Copyright <i class="fa fa-copyright" aria-hidden="true"></i>
                        {{this.getYear()}}. Sharper
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                year: 2016
            }
        },
        methods: {
            getYear() {
                this.year = new Date().getFullYear()
                return this.year
            }
        }
    }
</script>

<style lang="sass">
    .sharper-footer
        padding: 60px 0 60px
        background-color: #222222
        color: #fff

    .sharper-footer p
        font-family: 'Lato', sans-serif
    .sharper-footer h3
        font-family: 'Noto Sans', sans-serif

    .sharper-footer .social
            height: 30px
            width: 30px
            padding: 5px
            font-size: 17px
            border-radius: 50%
            margin-bottom: 10px
            margin-right: 5px
            border: 1px solid #cccccc


</style>