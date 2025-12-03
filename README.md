PINTA — demo web app

Это стартовый шаблон веб-приложения "Пинта" (лендинг + меню + простые заглушки для ролей).

Стек:
- БД: SQLite
- Бэкенд: Node.js + Express
- Фронтенд: React (Vite)
- Стили: Tailwind CSS

Что есть в репозитории:
- `backend/` — сервер Express, sqlite база в `backend/data/`
- `frontend/` — React приложение на Vite + Tailwind
- `.github/workflows/deploy.yml` — пример GitHub Actions workflow для деплоя на VPS по SSH

Дальше шаги (см. `./docs` или инструкции в рабочем процессе):
- Сгенерировать SSH-ключ и добавить публичную часть на VPS
- Добавить приватный ключ в секреты GitHub (`SSH_KEY`) и параметры `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PORT`
- Настроить Nginx и SSL на сервере

Если хотите, могу по шагам выполнить все инструкции и объяснить каждую команду.
