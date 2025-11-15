<?php

namespace Database\Seeders;

use App\Models\Organization;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Organization::firstOrCreate(
            ['email' => 'dtech@gmail.com'],
            [
                'name' => 'Dtech Learning',
                'slug' => 'dtech-learning',
                'address' => '123 Main St, City, Country',
                'country' => 'Togo',
                'city' => 'Lomé',
                'phone_number' => '90000000',
                'password' => 'adminadmin',
                'email_verified_at' => now(),
            ]
        );
    }
}
