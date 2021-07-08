<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    public function login(Request $request)
    {
        $this->validateLogin($request);
        $result = false;
        $status = 401;
        $message = 'User not found';
        $credentials = $request->only('name', 'password');
        if (Auth::attempt($credentials)) {
            $result = false;
            $status = 200;
            $message = 'Success';
            $user = Auth::user();
            $user->tokens()->where('name', 'token-name')->delete();
            $token = $user->createToken('token-name')->plainTextToken;
        }
        return response()->json([
            'result' => $result,
            'status' => $status,
            'user' => $user,
            'message' => $message
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return response()->json([
            'result' => true,
            'status' => 200,
            'message' => 'logged out'
        ]);
    }
}
