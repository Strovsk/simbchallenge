<?php

namespace App\Services;

use App\Models\ProjetoRouanet;

class ProjetoRouanetService
{
    public function getByPage(int $page)
    {
        $limit = 20;
        $offset = 0;

        if ($page > 1) {
            $offset = ($page - 1) * $limit;
        }

        $result_message = '';

        try {
            $query_result = ProjetoRouanet::limit($limit)->offset($offset)->get();
            $result_message = 'Success!';
        } catch (\Throwable $th) {
            Log::error(
                'Error on ProjetoRouanetService::getByPage: ' . $th->getMessage(),
                ['exception' => $th, 'page' => $page, 'limit' => $limit, 'offset' => $offset],
            );
            $result_message = 'Erro ao tentar acessar os dados no banco de dados';
            $query_result = [];
        }

        return [
            'data' => $query_result,
            'message' => $result_message,
        ];
    }
}
