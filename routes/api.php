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

// Route::apiResource('category', 'Api\CategoryController');
// Route::apiResource('user', 'Api\UserController');
// Route::apiResource('category/post', 'Api\PostController');

//

// // Lấy danh sách sản phẩm
// Route::get('products', 'Api\ProductController@index')->name('products.index');

// // Lấy thông tin sản phẩm theo id
// Route::get('products/{id}', 'Api\ProductController@show')->name('products.show');

// // Thêm sản phẩm mới
// Route::post('products', 'Api\ProductController@store')->name('products.store');

// // Cập nhật thông tin sản phẩm theo id
// # Sử dụng put nếu cập nhật toàn bộ các trường
// Route::put('products/{id}', 'Api\ProductController@update')->name('products.update');
// # Sử dụng patch nếu cập nhật 1 vài trường
// Route::patch('products/{id}', 'Api\ProductController@update')->name('products.update');

// // Xóa sản phẩm theo id
// Route::delete('products/{id}', 'Api\ProductController@destroy')->name('products.destroy');
Route::get('categories', 'Api\CategoryController@index')->name('categories.index');
Route::get('categories/{id}', 'Api\CategoryController@show')->name('categories.show');