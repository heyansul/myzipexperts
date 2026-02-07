<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProviderProfileController extends Controller
{
    public function show($id)
    {
        return User::with('providerProfile')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $request->validate([
            'phone' => 'nullable',
            'designation' => 'nullable',
            'experience' => 'nullable',
            'status' => 'required|in:approved,blocked,active,pending',
            'avatar' => 'nullable|image|max:2048',
        ]);

        // Update provider profile IF EXISTS
        if ($user->providerProfile) {
            $user->providerProfile->update([
                'phone' => $request->phone,
                'designation' => $request->designation,
                'experience' => $request->experience,
            ]);
        }

        // Avatar upload
        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');
            $user->avatar = $path;
        }

        // Status update (works for users & admins)
        $user->status = $request->status;
        $user->save();

        return response()->json(
            $user->load('providerProfile')
        );
    }

}
