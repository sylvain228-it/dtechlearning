<?php

namespace App\Http\Controllers\Partner;

use App\Http\Controllers\Controller;
use App\Traits\AppUtilityTrait;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PartnerLoginController extends Controller
{
    use AppUtilityTrait;
    public function showLoginForm()
    {
        return Inertia::render('partner/auth/partner-login');
    }

    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        try {
            $loginInput = $request->input('email');
            if (Auth::guard('partner')->attempt(['email' => $loginInput, 'password' => $request->password])) {
                $request->session()->regenerate();
                return redirect()->route('partner.dashboard');
            }

            return back()->withErrors(['login' => 'Idenfiant ou mot de passe incorrect.'])->withInput();
        } catch (Exception $e) {
            return response("Error : Quelques choses s'est mal passées");
        }
    }

    public function logout(Request $request)
    {
        Auth::guard('partner')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('partner.login');
    }
}
