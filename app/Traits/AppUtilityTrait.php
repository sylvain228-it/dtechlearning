<?php

namespace App\Traits;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

trait AppUtilityTrait
{



    function uniqueSlug($model, $title, $object_id = 0): string
    {
        $slug = Str::slug($title);
        $originSlug = $slug;
        $count = 1;
        while (true) {
            if ($object_id > 0) {
                if (!$model::where('slug', $slug)->whereNot('id', $object_id)->first()) {
                    break;
                }
            }
            if (!$model::where('slug', $slug)->first()) {
                break;
            }
            $slug = $originSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }

    function normalizePhoneNumber(string $input): ?string
    {
        // Supprimer espaces, tirets, parenthèses
        $number = preg_replace('/[\s\-\(\)]/', '', $input);

        // Supprimer indicatifs +228, 00228, ou 228 s’ils existent
        $number = preg_replace('/^(?:\+228|00228|228)/', '', $number);

        // Vérifier si le reste fait bien 8 chiffres
        if (preg_match('/^\d{8}$/', $number)) {
            return '+228' . $number;
        }

        return null;
    }

    public function sendOtp($mobile)
    {
        $url = 'https://www.nicelia.com/sms-api/public/index.php?send-otp';

        $response = Http::post($url, [
            'sender' => 'Nicelia',
            'mobile' => $mobile,
        ]);

        if ($response->successful()) {
            $data = $response->json();
            $otp = $data['otp'] ?? null;
            $status = "ok";

            return [
                'status' => $status,
                'otp' => $otp,
            ];
        } else {
            return [
                'status' => 'no'
            ];
        }
    }
}
