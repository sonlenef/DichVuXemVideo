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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('signup', 'Api\AuthController@register');
Route::post('login', 'Api\AuthController@login');

Route::group(['middleware' => 'jwt.auth'], function () {
    Route::get('auth', 'Api\AuthController@user');
    Route::post('logout', 'Api\AuthController@logout'); 
    Route::get('category', 'Api\CategoryController@index');
    // Route::post('category', 'Api\CategoryController@store');
    Route::get('post', 'Api\PostController@index');
    Route::get('category/{id}', 'Api\CategoryController@show');
    Route::get('category/{id}/post', 'Api\CategoryController@getCategoryPost');
    Route::post('category/{id}/post', 'Api\CategoryController@createPost');
});
Route::middleware('jwt.refresh')->get('/token/refresh', 'Api\AuthController@refresh');