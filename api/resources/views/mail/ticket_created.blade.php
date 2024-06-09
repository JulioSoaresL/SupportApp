<!DOCTYPE html>
<html>
<head>
    <title>Novo Chamado Aberto</title>
</head>
<body>
<h1>Novo Chamado Aberto</h1>
<p>Um novo chamado foi aberto no sistema de suporte.</p>
<p><strong>Título:</strong> {{ $ticket->title }}</p>
<p><strong>Descrição:</strong> {{ $ticket->description }}</p>
<p><strong>Status:</strong> {{ $ticket->status }}</p>
<p>Verifique o sistema de suporte para mais detalhes.</p>
</body>
</html>
