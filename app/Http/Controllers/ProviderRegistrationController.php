<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class ProviderRegistrationController extends Controller
{
    public function pendingProviders()
    {
        $providers = User::where('role', 'admin')
            ->where('status', 'pending')
            ->with('providerProfile') // we’ll add relation below
            ->get();

        return response()->json($providers);
    }
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'phone' => 'required',
            'password' => 'required|min:6',
            'designation' => 'required',
            'experience' => 'required',
        ]);

        DB::transaction(function () use ($request) {

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role' => 'admin',
                'status' => 'pending',
            ]);

            DB::table('provider_profiles')->insert([
                'user_id' => $user->id,
                'phone' => $request->phone,
                'designation' => $request->designation,
                'experience' => $request->experience,
                'govt_id_type' => $request->govtIdType,
                'govt_id_number' => $request->govtIdNumber,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        });

        return response()->json([
            'message' => 'Application submitted successfully'
        ], 201);
    }
}
