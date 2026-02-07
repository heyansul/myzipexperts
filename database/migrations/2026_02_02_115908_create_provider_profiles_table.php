<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('provider_profiles', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->string('phone');
        $table->string('designation');
        $table->string('experience');
        $table->string('govt_id_type')->nullable();
        $table->string('govt_id_number')->nullable();
        $table->timestamps();
    });
}

public function down()
{
    Schema::dropIfExists('provider_profiles');
}

};
