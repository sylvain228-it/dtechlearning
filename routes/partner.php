<?php

use App\Http\Controllers\Partner\PartnerCoursesController;
use App\Http\Controllers\Partner\PartnerDashboardController;
use App\Http\Controllers\Partner\PartnerEtudiantsController;
use App\Http\Controllers\Partner\PartnerLoginController;
use App\Http\Controllers\Partner\PartnerTeachersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


Route::group(['prefix' => '/dtech-partner', 'middleware' => ['auth.partner'], 'as' => 'partner.'], function () {
    Route::get('/dashboard', [PartnerDashboardController::class, 'index'])->name('dashboard');
    Route::get('/teachers', [PartnerTeachersController::class, 'index'])->name('teachers');
    Route::get('/cours', [PartnerCoursesController::class, 'index'])->name('courses');
    Route::get('/etudiants', [PartnerEtudiantsController::class, 'index'])->name('etudiants');
});
Route::group(['as' => 'partner.', 'middleware' => ['guest']], function () {
    Route::get('/dtech-partner-login', [PartnerLoginController::class, 'showLoginForm'])->name('login');
    Route::post('/dtech-partner-login', [PartnerLoginController::class, 'login'])->name('login.store');
    Route::post('/dtech-partner-logout', [PartnerLoginController::class, 'logout'])->name('logout');
});
