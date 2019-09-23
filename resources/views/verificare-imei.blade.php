@include('header')
<div class="app-main">
@include('navigation')
    @include('action-focus-check')
<!-- Content START -->
    <div class="app-main__outer">
        <div class="app-main__inner">
            <div class="app-page-title">
                <div class="page-title-wrapper">
                    <div class="page-title-heading">
                        <div class="page-title-icon">
                            <i class="pe-7s-drawer icon-gradient bg-happy-itmeo">
                            </i>
                        </div>
                        <div>Verificare IMEI
                            <div class="page-title-subheading">
                                Tasteaza un IMEI mai jos pentru a cauta dupa un anumit telefon in fisele de service
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 search-wrapper active">
                    <div class="input-holder">
                        <input type="text" class="search-input" id = "searched-imei" placeholder="Type to search">
                        <button class="search-icon" id = "start-search"><span></span></button>
                    </div>
                    <button class="close"></button>
                </div>
            </div>
        </div>
    </div>
    @include('footer')
    <script type="text/javascript" src="../resources/js/api.js"></script>
    </body>
    </html>
