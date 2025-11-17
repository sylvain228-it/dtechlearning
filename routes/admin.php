<?php

use App\Http\Controllers\Admin\AdminCoursesController;
use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminEtudiantsController;
use App\Http\Controllers\Admin\AdminPartnersController;
use App\Http\Controllers\Admin\AdminTeachersController;
use App\Http\Controllers\Admin\Auth\AdminLoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


Route::group(['prefix' => '/dtech-hpanel', 'middleware' => ['auth.admin'], 'as' => 'admin.'], function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
    Route::get('/partners', [AdminPartnersController::class, 'index'])->name('partners');
    Route::get('/teachers', [AdminTeachersController::class, 'index'])->name('teachers');
    Route::get('/cours', [AdminCoursesController::class, 'index'])->name('courses');
    Route::get('/etudiants', [AdminEtudiantsController::class, 'index'])->name('etudiants');
});
Route::group(['as' => 'admin.', 'middleware' => ['guest']], function () {
    Route::get('/dtech-hpanel-login', [AdminLoginController::class, 'showLoginForm'])->name('login');
    Route::post('/dtech-hpanel-login', [AdminLoginController::class, 'login'])->name('login.store');
    Route::post('/dtech-hpanel-logout', [AdminLoginController::class, 'logout'])->name('logout');
});
