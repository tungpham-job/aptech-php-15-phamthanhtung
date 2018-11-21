
<!-- print data with collection -->
@foreach($posts as $post)
<div>
  {{$post->title}} - {{$post->category->name}}
</div>
@endforeach

<!-- print data with array -->
<!-- @foreach($posts as $post)
<div>
{{$post['title']}} - {{$post['category']['name']}}
</div>
@endforeach -->


