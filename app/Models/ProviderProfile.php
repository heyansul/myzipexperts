<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProviderProfile extends Model
{
    use HasFactory;

    protected $table = 'provider_profiles';

    protected $fillable = [
        'user_id',
        'phone',
        'designation',
        'experience',
        'govt_id_type',
        'govt_id_number',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
