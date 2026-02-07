<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class ProviderApprovalController extends Controller
{
    public function pendingProviders()
    {
        return User::where('role', 'admin')
            ->where('status', 'pending')
            ->with('providerProfile')
            ->get();
    }

    public function approve($id)
    {
        $provider = User::findOrFail($id);

        if ($provider->role !== 'admin') {
            return response()->json(['message' => 'Invalid provider'], 400);
        }

        $provider->status = 'approved';
        $provider->save();

        return response()->json([
            'message' => 'Provider approved successfully'
        ]);
    }

    public function reject($id)
    {
        $provider = User::findOrFail($id);

        if ($provider->role !== 'admin') {
            return response()->json(['message' => 'Invalid provider'], 400);
        }

        $provider->status = 'blocked';
        $provider->save();

        return response()->json([
            'message' => 'Provider rejected successfully'
        ]);
    }
}
