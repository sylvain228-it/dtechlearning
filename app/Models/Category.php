<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'description', 'slug', 'admin_id', 'category_id', 'is_active', 'cover_url', 'cover_id'];
}
