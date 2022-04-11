<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('info_users', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->unique();
            $table->timestamps();
            $table->string('avatar')->nullable();
            $table->string('name', 32)->nullable();
            $table->string('surname', 32)->nullable();
            $table->string('status', 255)->nullable();
            $table->date('birthday')->nullable();
            $table->string('hometown', 32)->nullable();
            $table->string('phone_number', 32)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('info_users');
    }
};
