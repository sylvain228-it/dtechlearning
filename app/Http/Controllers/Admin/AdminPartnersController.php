<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\Request;

class AdminPartnersController extends Controller
{
    public function index()
    {
        $partners = Organization::all();
        return inertia('admin/partners/index', [
            'partners' => $partners,
        ]);
    }
}
