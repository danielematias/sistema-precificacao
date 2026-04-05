<?php
header('Content-Type: application/json');

// Function to calculate product price
function calcularPreco($custo) {
    $icms = 0.18; // ICMS rate
    $comissao = 0.02; // Commission rate
    $margem = 0.30; // Margin rate

    $preco = $custo * (1 + $icms) * (1 + $comissao) * (1 + $margem);
    return $preco;
}

// Get cost from request
if (isset($_GET['custo'])) {
    $custo = floatval($_GET['custo']);
    $preco = calcularPreco($custo);
    echo json_encode(['preco' => $preco]);
} else {
    echo json_encode(['error' => 'Custo não fornecido.']);
}