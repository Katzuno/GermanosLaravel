<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/proxy', 'ProxyController@addCors')->name('proxy');
Route::post('/createDoc/{id}/{swap}', 'FisaController@createFisa')->name('createDoc');
Route::get('/selectSwap/{id}', 'FisaController@selectSwap')->name('selectSwap');
