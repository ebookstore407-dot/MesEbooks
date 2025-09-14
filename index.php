<?php
// Vérifier si la page est appelée directement
if (!defined('SECURE_ACCESS')) {
    // Définir les headers pour éviter la mise en cache
    header('Cache-Control: no-cache, no-store, must-revalidate');
    header('Pragma: no-cache');
    header('Expires: 0');

    // Rediriger vers la page d'accueil
    header('Location: index.html');
    exit();
}
?>