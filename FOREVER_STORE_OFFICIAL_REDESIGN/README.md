# FOREVER Store

Boutique Next.js bilingue (FR + AR) avec Font Awesome.

## Inclus
- Français par défaut + arabe RTL
- 66 produits dont le prix public 2026 a été vérifié
- Catégories
- Recherche et filtre
- Fiche produit
- Panier
- Checkout COD
- Font Awesome
- Endpoint `/api/orders`
- Intégration n8n optionnelle via `ORDER_WEBHOOK_URL`

## Déploiement Coolify
- Build Pack: Nixpacks
- Base Directory: `/`
- Port: `3000`
- Static Site: OFF

## n8n plus tard
Ajouter dans Coolify > Environment Variables:

`ORDER_WEBHOOK_URL=https://votre-n8n/webhook/...`

Sans cette variable, les commandes de test apparaissent seulement dans les logs du serveur.
