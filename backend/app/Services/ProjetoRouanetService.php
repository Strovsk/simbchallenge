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

        // NOTE: I observed that the database engine of this table is the MyISAM, which is better when consulting data than InnoDB.
        // However, some queries like count are not as fast as InnoDB. A good approach would be to use a counter column in the table
        // Or a cache system to store the number of rows in the table. Or even a table that stores the number of rows in other tables.
        $number_of_pages = ceil(ProjetoRouanet::count() / 20);

        if ($page > $number_of_pages) {
            return [
                'data' => [],
                'number_of_pages' => $number_of_pages,
                'message' => "Página não encontrada [pagina solicitada: $page]",
            ];
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
            'number_of_pages' => $number_of_pages,
            'message' => $result_message,
        ];
    }
}
