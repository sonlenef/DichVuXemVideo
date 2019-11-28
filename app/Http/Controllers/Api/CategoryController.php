<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use App\Models\User;
use App\Http\Resources\Category as CategoryResource;
use App\Http\Resources\Post as PostResource;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = Category::all();
    
        return CategoryResource::collection($category);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        if($user->role == 'admin'){
            $category = Category::create($request->all());
    
            return new CategoryResource($category);
        }
        return response()->json([
            'status' => 'error'
        ], Response::HTTP_BAD_REQUEST);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = Category::find($id);
        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        return $category->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
    }

// Post

    public function getCategoryPost($id)
    {
        $post = Post::where("category_id", $id)->take(10)->get();
        return PostResource::collection($post);
    }

    public function getPost(Post $post)
    {
        return new PostResource($post);
    }

    public function createPost($id, Request $request)
    {
        $user = Auth::user();
        if($user->role == 'admin'){
            $post = Post::create($request->all());
    
            return new PostResource($post);
        }
        return response()->json([
            'status' => 'error'
        ], Response::HTTP_BAD_REQUEST);
    }

    // public function updatePost(Request $request, Post $post)
    // {
    //     return $post->update($request->all());
    // }

    // public function destroyPost(Post $post)
    // {
    //     $post->delete();
    // }
}
