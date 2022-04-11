<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use JetBrains\PhpStorm\ArrayShape;


class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function show(Request $request, string $login)
    {
        $user_id = DB::table('users')->where("login", $login)->value('id');
        $user = User::findOrFail($user_id);
        $info_user = $user->info_users;

        return $this->sort_response_show($info_user);
    }

    public function sort_response_show($info_user): array
    {
        return [
            "avatar"       => $info_user->avatar,
            "birthday"     => $info_user->birthday,
            "created_at"   => $info_user->created_at,
            "hometown"     => $info_user->hometown,
            "name"         => $info_user->name,
            "phone_number" => $info_user->phone_number,
            "status"       => $info_user->status,
            "surname"      => $info_user->surname,
        ];
    }
}
