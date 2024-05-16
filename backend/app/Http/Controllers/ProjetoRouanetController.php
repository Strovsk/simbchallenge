<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjetoRouanet;

class ProjetoRouanetController extends Controller
{
    public function all()
    {
        return ProjetoRouanet::all();
    }
}
