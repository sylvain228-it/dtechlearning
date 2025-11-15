<?php

namespace App\Http\Controllers\Partner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PartnerDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('partner/dashboard');
    }
}
