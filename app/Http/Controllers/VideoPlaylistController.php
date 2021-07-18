<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VideoPlaylistController extends Controller
{

    public $time_stamp_format = 'Y/m/d H:i:s';

    public function registVideoPlaylist(Request $request)
    {
        DB::table('video_playlists')->insert([
            'name' => $request->input('name'),
            'user_id' => $request->input('user_id'),
            'is_public' => $request->input('is_public'),
            'created_at' => date($this->time_stamp_format),
            'updated_at' => date($this->time_stamp_format),
        ]);
    }

    public function registVideos(Request $request)
    {
        foreach($request->all() as $item) {
            DB::table('videos')->insert([
                'name' => $item['name'],
                'playlist_id' => $this->getlatestPlaylistId(),
                'url' => $item['url'],
                'created_at' => date($this->time_stamp_format),
                'updated_at' => date($this->time_stamp_format),
            ]);
        }
    }

    public function getVideoPlaylist(Request $request)
    {
        logger($request->id);
        $playlist = DB::table('video_playlists')->where('id', $request->id)->get();
        $videos = DB::table('videos')->where('playlist_id', $request->id)->get();
        return response()->json([
            'playlist' => $playlist,
            'videos' => $videos,
            'isError' => is_null($playlist) || is_null($videos) 
        ]);
    }

    public function getlatestPlaylistId()
    {
        return DB::table('video_playlists')->orderBy('id', 'desc')->first()->id;
    }
}
