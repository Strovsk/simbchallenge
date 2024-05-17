<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ProjetoRouanetService;

class ProjetoRouanetController extends Controller
{

    private ProjetoRouanetService $service;

    public function __construct(ProjetoRouanetService $service)
    {
        $this->service = $service;
    }
    public function all(Request $request)
    {
        $page = $request->input('page', 1);

        $query_result = $this->service->getByPage($page);

        return response()->json([
            'page' => $page,
            'limit' => 20,
            'offset' => ($page - 1) * 20,
            'number_of_pages' => $query_result['number_of_pages'],
            'message' => $query_result['message'],
            'data' => $query_result['data'],
        ]);
    }
}
