@include('header')
<div class="app-main">
@include('navigation')
    @include('action-focus-create')
<!-- Content START -->
    <div class="app-main__outer">
        <div class="app-main__inner">
            <div class="app-page-title">
                <div class="page-title-wrapper">
                    <div class="page-title-heading">
                        <div class="page-title-icon">
                            <i class="lnr-picture text-danger">
                            </i>
                        </div>
                        <div>Creeaza fisa service
                            <div class="page-title-subheading">
                                Completeaza forma de mai jos pentru a crea o fisa de service
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-card mb-3 card">
                <div class="card-body">
                    <h5 class="card-title">Fisa Service</h5>

                    <form class="" id = "completare_fisa">
                        <h5 class="card-title"> General Data </h5>
                        <div class="form-row">
                            <div class="col-md-8">
                                <div class="position-relative form-group">
                                    <label for="nr_card" class="">Numar card</label>
                                    <input name="email" id="nr_card" placeholder="with a placeholder" type="text" class="form-control"></div>
                            </div>
                            <div class="col-md-4">

                            </div>

                            <div class="col-md-8">
                                <div class="position-relative form-group">
                                    <label for="client" class="">Client</label>
                                    <select id = "client" name = "client" class = "form-control">

                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">

                            </div>

                            <div class="col-md-8">
                                <div class="position-relative form-group">
                                    <label for="agent" class="">Agent</label>
                                    <select id = "agent" name = "agent" class = "form-control">

                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">

                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label for="checkbox_imei" class="">Poate contine IMEI? </label>
                                    <input style = "margin-left: 2%;" name="email" id="checkbox_imei" type="checkbox" class="form-check-input">
                                </div>
                            </div>

                            <div class="col-md-8">
                                <div class="position-relative form-group">
                                    <label for="checkbox_imei" class="">IMEI: </label>
                                    <input name="email" id="text_imei" type="text"  placeholder="A se lasa liber in cazul in care checkbox-ul e fals" class="form-control">
                                </div>
                            </div>
                        </div>

                        <h5 class="card-title"> Detalii client </h5>
                        <div class="form-row">
                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label for="nume_client" class="">Nume client</label>
                                    <input name="email" id="nume_client" placeholder="with a placeholder" type="text" class="form-control"></div>
                            </div>
                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label for="adresa" class="">Adresa</label>
                                    <input name="email" id="adresa" placeholder="with a placeholder" type="text" class="form-control"></div>
                            </div>
                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label for="email" class="">Email</label>
                                    <input name="email" id="email" placeholder="with a placeholder" type="text" class="form-control"></div>
                            </div>

                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label for="oras" class="">Oras</label>
                                    <input name="email" id="oras" placeholder="with a placeholder" type="text" class="form-control"></div>
                            </div>
                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label for="cnp" class="">CNP</label>
                                    <input name="email" id="cnp" placeholder="with a placeholder" type="text" class="form-control"></div>
                            </div>
                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label for="phone" class="">Telefon</label>
                                    <input name="email" id="phone" placeholder="with a placeholder" type="text" class="form-control"></div>
                            </div>


                            <div class="col-md-8">
                                <div class="position-relative form-group">
                                    <label for="delegat" class="">Delegat</label>
                                    <input name="email" id="delegat" placeholder="with a placeholder" type="text" class="form-control"></div>
                            </div>
                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label for="parola" class="">Parola acces</label>
                                    <input name="email" id="parola" placeholder="with a placeholder" type="text" class="form-control">
                                </div>
                            </div>
                        </div>



                        <h5 class="card-title"> De unde ati aflat de magazinul IQFIX / serviciul de reparatii? </h5>
                        <div class="form-row">
                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label for="sursa" class="">Sursa</label>
                                    <select name="sursa" id="sursa" type="text" class="form-control">
                                        <option value = "1"> Facebook - retele sociale</option>
                                        <option value = "2"> Google/cautare pe internet</option>
                                        <option value = "3"> OLX</option>
                                        <option value = "4"> Recomandat de un prieten</option>
                                        <option value = "5"> Trecand pe langa magazin</option>
                                        <option value = "6"> Presa/articol</option>
                                        <option value = "7"> Consultant IQBox - IQFix</option>
                                        <option value = "8"> Alte surse</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label for="canal" class="">Canal</label>
                                    <select id = "canal" name = "canal" class = "form-control">

                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="position-relative form-group">
                                    <label for="stare2" class="">Stare</label>
                                    <select id = "stare2" name = "canal" class = "form-control">

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-md-6">
                                <div class="position-relative form-group">
                                    <label for="data_achizitie" class="">Data achizitiei</label>
                                    <input name="email" id="data_achizitie" placeholder="with a placeholder" type="date" class="form-control"></div>
                            </div>

                            <div class="col-md-6">
                                <div class="position-relative form-group">
                                    <label for="model_telefon" class="">Model telefon</label>
                                    <input name="email" id="model_telefon" placeholder="with a placeholder" type="text" class="form-control"></div>
                            </div>
                        </div>

                        <h5 class="card-title"> Observatii </h5>
                        <div class="form-row">
                            <div class="col-md-12">
                                <div class="position-relative form-group">
                                    <label for="observatii" class="">Observatii</label>
                                    <input name="email" id="observatii" placeholder="with a placeholder" type="text" class="form-control"></div>
                            </div>
                        </div>

                        <h5 class="card-title"> Defect reclamat </h5>
                        <div class="form-row">
                            <div class="col-md-12">
                                <div class="position-relative form-group">
                                    <label for="defect" class="">Defect</label>
                                    <input name="email" id="defect" placeholder="with a placeholder" type="text" class="form-control"></div>
                            </div>
                            <button class="mt-2 btn btn-primary" type = "submit" id = "createButton">Trimite in service</button>

                        </div>
                        <div class = "form-row">
                            <button class="mt-2 btn btn-primary" id = "downloadPDFBtn">Descarca PDF cu date curente</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    </div>
    @include('printed_pdf')
    @include('footer')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.debug.js" type="text/javascript"></script>

    <script type="text/javascript" src="../resources/js/create-service.js"></script>
    </body>
    </html>
