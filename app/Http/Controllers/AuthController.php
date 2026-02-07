<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    // ---------------- LOGIN ----------------
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        $loginValue = $request->email;

        // Allow login via email OR phone
        $user = User::where('email', $loginValue)
            ->orWhere('phone', $loginValue)
            ->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }

        // 🔐 BLOCK LOGIC STARTS HERE

        // Block blocked users (any role)
        if ($user->status === 'blocked') {
            return response()->json([
                'message' => 'Your account has been blocked. Contact support.'
            ], 403);
        }

        // Block pending service providers
        if ($user->role === 'admin' && $user->status !== 'approved') {
            return response()->json([
                'message' => 'Your account is under review. Please wait for approval.'
            ], 403);
        }


        // 🔐 BLOCK LOGIC ENDS HERE

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user' => $user
        ]);
    }

    // ---------------- REGISTER ----------------
    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users',
            'phone' => 'required|unique:users,phone',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'name' => 'User',
            'email' => $request->email,
            'phone' => $request->phone,   // ✅ REAL PHONE SAVED
            'password' => Hash::make($request->password),
            'role' => 'user',
            'status' => 'approved',
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully',
            'token' => $token,
            'user' => $user,
        ], 201);
    }

     // ---------------- ME ----------------
    public function me(Request $request)
    {
        return response()->json(
            $request->user()->load('providerProfile')
        );
    }
}
