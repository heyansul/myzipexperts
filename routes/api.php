<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ForgotPasswordController;
use App\Http\Controllers\ProviderRegistrationController;
use App\Http\Controllers\Admin\ProviderApprovalController;
use App\Http\Controllers\Provider\ProfileController;
use App\Http\Controllers\Admin\ProviderProfileController;

Route::post('/forgot-password/send-otp', [ForgotPasswordController::class, 'sendOtp']);
Route::post('/forgot-password/verify-otp', [ForgotPasswordController::class, 'verifyOtp']);
Route::post('/forgot-password/reset', [ForgotPasswordController::class, 'resetPassword']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/provider/register', [ProviderRegistrationController::class, 'register']);
Route::get('/test-login', function () {
    return response()->json(['status' => 'api working']);
});
Route::middleware('auth:sanctum')->get('/users', [UserController::class, 'index']);
Route::middleware('auth:sanctum')->get('/me', function (Request $request) {
    return response()->json($request->user());
});
Route::middleware(['auth:sanctum', 'admin'])->get('/admin/test', function () {
    return response()->json([
        'message' => 'Welcome Admin, you have access.'
    ]);
});
Route::middleware(['auth:sanctum'])
    ->get('/admin/providers/pending', [ProviderApprovalController::class, 'pendingProviders']);
Route::middleware(['auth:sanctum'])
    ->prefix('admin/providers')
    ->group(function () {
        Route::get('/pending', [ProviderApprovalController::class, 'pendingProviders']);
        Route::post('/{id}/approve', [ProviderApprovalController::class, 'approve']);
        Route::post('/{id}/reject', [ProviderApprovalController::class, 'reject']);
    });
Route::middleware('auth:sanctum')->get('/me', [AuthController::class, 'me']);
Route::middleware(['auth:sanctum'])
    ->post('/provider/profile', [ProfileController::class, 'update']);

Route::middleware(['auth:sanctum'])
    ->prefix('admin')
    ->group(function () {
        Route::get('/providers/{id}', [ProviderProfileController::class, 'show']);
        Route::post('/providers/{id}', [ProviderProfileController::class, 'update']);
    });