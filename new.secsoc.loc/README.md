# ОБЩЕЕ

1. Локализация ответа определяется через cookie

# АЛИАСЫ
1. Алиасы импорта определяются в package.json _moduleAliases
2. При изменении алисов нужно запустить npm run postinstall
3. Имя алиса необходимо создавать со знака ~, во избежание конфликта имен
4. Ни в коем случае не называть алисы со знака @

# Развертывание
1. npm run postinstall

# МАРШРУТИЗАЦИЯ

1. В качестве имен для маршрутов следует по возможности использовать имена маршрутов схожие на имена ресурсных контроллеров laravel

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