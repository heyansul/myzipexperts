<?php

namespace App\Http\Controllers\Provider;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function update(Request $request)
    {
        $user = $request->user();

        $request->validate([
            'phone' => 'required',
            'designation' => 'required',
            'experience' => 'required',
            'avatar' => 'nullable|image|max:2048',
        ]);

        // Update provider profile
        $user->providerProfile->update([
            'phone' => $request->phone,
            'designation' => $request->designation,
            'experience' => $request->experience,
        ]);

        // Handle avatar upload
        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');
            $user->avatar = $path;
            $user->save();
        }

        return response()->json(
            $user->load('providerProfile')
        );
    }
}
