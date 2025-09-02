# Simple Express + MySQL + Nginx (Docker Compose)

A minimal stack to satisfy the DevOps assessment:
- Node.js (Express) app
- MySQL (with sample data)
- Nginx reverse proxy on port 80 (443 exposed, HTTPS server block commented)
- Health checks + simple alert script
- No hardcoded DB credentials in code (env vars only)

## Prerequisites
- Docker & Docker Compose
- (For EC2) Security Group: allow 22 (SSH), 80 (HTTP), 443 (HTTPS). 3306 optional (not required publicly).

## Run locally or on EC2
```bash
docker compose up -d --build
