<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('slug', 100)->unique(); // ex: "ecole-alpha"
            $table->string('email', 150)->nullable();
            $table->string('contact_email', 150)->nullable();
            $table->string('tel', 50)->nullable();
            $table->string('phone_number', 50)->nullable();
            $table->text('address')->nullable();
            $table->text('s_address')->nullable();
            $table->string('logo_url')->nullable();
            $table->string('logo_url_id')->nullable();
            $table->string('cover_url')->nullable();
            $table->string('cover_id')->nullable();
            $table->string('website_url')->nullable();
            $table->json('theme')->nullable(); // pour les couleurs, logo, etc.
            $table->enum('type', ['university', 'training_center'])->default('training_center');
            $table->enum('billing_plan', ['free', 'standard', 'premium'])->default('standard');
            $table->boolean('is_active')->default(false);
            $table->date('born_date')->nullable();
            $table->date('last_login_date')->nullable();
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('organizations');
    }
};
