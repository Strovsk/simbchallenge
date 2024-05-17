<?php

use Illuminate\Support\Facades\Route;
use Symfony\Component\Yaml\Yaml;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/docs', function () {
    return view('docs');
})->name('docs');

Route::get('/api.json', function () {
    $yaml_location = storage_path('private/openapi_schema.yml');
    $yaml_content = file_get_contents($yaml_location);
    $parsed_file = Yaml::parse($yaml_content);
    return response()->json($parsed_file);
})->name('api_json');
