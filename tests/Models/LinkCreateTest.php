<?php

namespace Tests\Unit\Models;

use App\Helper\HtmlMeta;
use App\Helper\LinkAce;
use App\Helper\LinkIconMapper;
use App\Models\User;
use App\Repositories\LinkRepository;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class LinkCreateTest extends TestCase
{
    use DatabaseMigrations;
    use DatabaseTransactions;

    /** @var User */
    private $user;

    public function setUp(): void
    {
        parent::setUp();

        $testHtml = '<!DOCTYPE html><head><title>Google</title></head></html>';

        Http::fake([
            '*' => Http::response($testHtml, 200),
        ]);

        $this->user = factory(User::class)->create();
    }

    public function testValidLinkCreation(): void
    {
        $this->be($this->user);

        $url = 'https://google.com/';

        $meta = HtmlMeta::getFromUrl($url);

        $original_data = [
            'url' => $url,
            'title' => $meta['title'],
            'description' => $meta['description'],
            'is_private' => false,
        ];

        $link = LinkRepository::create($original_data);

        $automated_data = [
            'id' => $link->id,
            'icon' => LinkIconMapper::mapLink($url),
            'user_id' => auth()->user()->id,
            'status' => 1,
            'created_at' => $link->created_at,
            'updated_at' => $link->updated_at,
            'deleted_at' => null,
        ];

        $asserted_data = array_merge($automated_data, $original_data);

        $this->assertDatabaseHas('links', $asserted_data);
    }
}
