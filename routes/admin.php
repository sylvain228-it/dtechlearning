<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\Auth\AdminLoginController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


Route::group(['prefix' => '/dtech-hpanel', 'middleware' => ['auth.admin'], 'as' => 'admin.'], function () {
    Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');
});
Route::group(['as' => 'admin.', 'middleware' => ['guest']], function () {
    Route::get('/dtech-hpanel-login', [AdminLoginController::class, 'showLoginForm'])->name('login');
    Route::post('/dtech-hpanel-login', [AdminLoginController::class, 'login'])->name('login.store');
    Route::post('/dtech-hpanel-logout', [AdminLoginController::class, 'logout'])->name('logout');
});
