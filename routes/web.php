<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('/', function () {
    return view('listeaza-fise');
})->middleware('auth');


Route::get('/dashboard', function () {
    return view('listeaza-fise');
})->middleware('auth')->name('index');

Route::get('/create-fisa', function () {
    return view('creare-fise');
})->middleware('auth')->name('create-fisa');

Route::get('/verificare-imei', function () {
    return view('verificare-imei');
})->middleware('auth')->name('check-fisa');

Route::get('/logout', function ()   {
    Auth::logout();
    return redirect(route('login'));
})->middleware('auth')->name('logout');

Route::get('/home', 'HomeController@index')->name('home');
