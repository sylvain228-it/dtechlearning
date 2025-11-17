<?php

namespace App\Http\Controllers\Partner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PartnerEtudiantsController extends Controller
{
    public function index()
    {
        return inertia('partner/etudiants/index');
    }
}
