<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Post;

class PostController extends Controller
{
    public function index()
    {
        // $posts = Post::all();
        // return view('posts.index', ['posts' => $posts]);
        $posts = Post::with('category')->where('category_id','>=',3)->get();
        return view('posts.index', ['posts' => $posts]);
    }
}
