<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cache;

class ForgotPasswordController extends Controller
{
    // 1️⃣ Send OTP
    public function sendOtp(Request $request)
    {
        $request->validate([
            'phone' => 'required'
        ]);

        $user = User::where('phone', $request->phone)->first();

        if (!$user) {
            return response()->json(['message' => 'Phone not found'], 404);
        }

        // Generate 6 digit OTP
        $otp = rand(100000, 999999);

        // Store OTP for 5 minutes
        Cache::put('otp_'.$request->phone, $otp, now()->addMinutes(5));

        // 🔴 For now just log OTP (later integrate SMS)
        \Log::info("OTP for {$request->phone} is {$otp}");

        return response()->json([
            'message' => 'OTP sent successfully'
        ]);
    }

    // 2️⃣ Verify OTP
    public function verifyOtp(Request $request)
    {
        $request->validate([
            'phone' => 'required',
            'otp' => 'required'
        ]);

        $cachedOtp = Cache::get('otp_'.$request->phone);

        if (!$cachedOtp || $cachedOtp != $request->otp) {
            return response()->json(['message' => 'Invalid OTP'], 400);
        }

        return response()->json([
            'message' => 'OTP verified'
        ]);
    }

    // 3️⃣ Reset Password
    public function resetPassword(Request $request)
    {
        $request->validate([
            'phone' => 'required',
            'password' => 'required|min:6'
        ]);

        $user = User::where('phone', $request->phone)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        // Clear OTP
        Cache::forget('otp_'.$request->phone);

        return response()->json([
            'message' => 'Password updated successfully'
        ]);
    }
}
