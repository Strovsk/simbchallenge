<?php

namespace Tests\Feature;

use Tests\TestCase;

use App\Http\Controllers\ProjetoRouanetController;
use App\Services\ProjetoRouanetService;

class ProjetoRouanetTest extends TestCase
{
    public function test_the_application_returns_a_successful_response()
    {
        // make a resquest to the route /api/projetos-rouanet
        $response = $this->get('/api/projetos-rouanet');

        // check if the response status is 200
        $this->assertEquals(200, $response->status());

        // check if the response is a json
        $response->assertJsonStructure([
            'page',
            'limit',
            'offset',
            'number_of_pages',
            'message',
            'data',
        ]);

        // check if data key is an array
        $this->assertIsArray($response->json()['data']);

        // Check if data has 20 items
        $this->assertCount(20, $response->json()['data']);

    }
}
