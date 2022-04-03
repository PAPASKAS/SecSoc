# ОБЩЕЕ

1. Каждый запрос на сервер должен содержать поле  c именем текущей локали, если ожидает локализированный ответ

# МАРШРУТИЗАЦИЯ

1. В качестве имен для марширутов используется имена маршрутов как в ресурсных контролерах laravel

<table>
    <tr>
        <th>Verb</th>
        <th>URI</th>
        <th>ACTION</th>
    </tr>
    <tr>
        <th>POST</th>
        <th>/photos</th>
        <th>index</th>
    </tr>
    <tr>
        <th>POST</th>
        <th>/photos/create</th>
        <th>create</th>
    </tr>
    <tr>
        <th>POST</th>
        <th>/photos</th>
        <th>store</th>
    </tr>
    <tr>
        <th>POST</th>
        <th>/photos/[id]</th>
        <th>show</th>
    </tr>
    <tr>
        <th>POST</th>
        <th>/photos/[id]/edit</th>
        <th>edit</th>
    </tr>
    <tr>
        <th>PUT/PATCH</th>
        <th>/photos/[id]</th>
        <th>update</th>
    </tr>
    <tr>
        <th>DELETE</th>
        <th>/photos/[id]</th>
        <th>destroy</th>
    </tr>
</table>