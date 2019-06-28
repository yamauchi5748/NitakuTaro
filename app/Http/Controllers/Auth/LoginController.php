<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\User;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
      $this->middleware('guest')->except('logout');
    }

    public function username()
    {
      return 'id';
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  Request $request
     */
    protected function validation(Request $request)
    {
        return $request->validate([
            'id' => 'required|string',
            'password' => 'required|string|min:8'
        ]);
    }

    public function login(Request $request){
      $result = null;
      $validatedData = $this->validation($request);

      // ユーザー検索
      $user = User::where('id', $request->id)
                  ->first();

      if($user)
      {
        // パスワード比較
        $pass_check = Hash::check($request->password, $user->password);
        \Log::debug(Hash::check($request->password, $user->password));

        if($pass_check)
        {
          // APIトークンの更新
          $user->api_token = Str::random(80);
          $user->save();

          $result = [
            'id' => $user->id,
            'api_token' => $user->api_token
          ];
        }
      }

      return $result;
    }
}
