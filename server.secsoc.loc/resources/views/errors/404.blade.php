@php
    $url = env("FRONTEND_URL");
    header("Location: $url");
    exit();
@endphp