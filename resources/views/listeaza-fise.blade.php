@include('header')
<div class="app-main">
@include('navigation')
@include('action-focus-list')
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
                        <div>Fise service
                            <div class="page-title-subheading">
                                Subtitlu
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-lg-12">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Fise service emise de filiala ta Germanos</h5>
                            <table class="mb-0 table table-dark">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Client</th>
                                    <th>Contact</th>
                                    <th>Imei</th>
                                    <th>Actions</th>
                                    <th>Swap</th>
                                </tr>
                                </thead>
                                <tbody id = "lista-fise">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@include('footer')
<script type="text/javascript" src="../resources/js/api.js"></script>
</body>
</html>
