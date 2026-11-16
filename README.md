# DevOps Lab — Roadmap v1.0

## День 1: Минимальное приложение и Git (1–2 ч)
- [ ] Создать репозиторий devops-lab
- [ ] Инициализировать Next.js + TypeScript
- [ ] Добавить GET /api/health
- [ ] Добавить README и .gitignore
- [ ] Проверить локальный запуск
Готово, когда: Приложение отвечает на localhost:3000/api/health

## День 2: PostgreSQL через Homebrew (2–3 ч)
- [ ] Установить PostgreSQL через Homebrew
- [ ] Запустить PostgreSQL service
- [ ] Создать пользователя и базу devops_lab
- [ ] Подключиться через psql и выполнить SELECT NOW()
- [ ] Добавить GET /api/db через pg
Готово, когда: Обе API-ручки работают с локальной PostgreSQL

## День 3: Docker fundamentals (2–3 ч)
- [ ] Разобраться в image, container, Dockerfile, Docker Engine
- [ ] Изучить Next.js with-docker example
- [ ] Создать минимальный Dockerfile и .dockerignore
- [ ] Собрать image и запустить контейнер через docker run
- [ ] Проверить ports, logs, exec, stop и rm
Готово, когда: Next.js работает в Docker на localhost:3000

## День 4: Multi-stage Docker build (2–3 ч)
- [ ] Разобрать FROM, WORKDIR, COPY, RUN, CMD
- [ ] Изучить build stages и standalone output Next.js
- [ ] Разделить Dockerfile на dependencies, builder, runner
- [ ] Проверить размер image и запуск
- [ ] Убрать лишние файлы и зависимости из runtime image
Готово, когда: Рабочий multi-stage production image

## День 5: Docker Compose и PostgreSQL (2–3 ч)
- [ ] Создать compose.yaml с сервисами app и db
- [ ] Настроить внутреннюю Docker network
- [ ] Добавить volume для данных PostgreSQL
- [ ] Настроить DATABASE_URL и healthchecks
- [ ] Проверить сохранность данных после пересоздания контейнера
Готово, когда: Одна команда docker compose up -d запускает весь стек

## День 6: VPS и Linux (2–3 ч)
- [ ] Арендовать небольшой VPS с Ubuntu
- [ ] Подключиться по SSH-ключу
- [ ] Разобрать Linux users, permissions, processes и systemd
- [ ] Установить Docker Engine и Compose plugin
- [ ] Настроить firewall и доступ по SSH
Готово, когда: Удалённый сервер готов к контейнерному deployment

## День 7: Ручной deployment на VPS (2–3 ч)
- [ ] Перенести compose-конфигурацию на VPS
- [ ] Собрать или загрузить Docker image
- [ ] Запустить приложение и PostgreSQL
- [ ] Проверить доступ по публичному IP
- [ ] Проверить logs, restart и сохранность данных
Готово, когда: Приложение доступно с другого устройства по IP

## День 8: Nginx, DNS и HTTPS (2–3 ч)
- [ ] Установить Nginx на VPS
- [ ] Настроить reverse proxy к Next.js
- [ ] Разобрать DNS A record и доменное имя
- [ ] Настроить домен при его наличии
- [ ] Добавить HTTPS с Let's Encrypt при наличии домена
Готово, когда: Приложение открывается через Nginx по HTTP/HTTPS

## День 9: GitHub Actions и Container Registry (2–3 ч)
- [ ] Добавить CI с проверками и Docker build
- [ ] Разобраться с GHCR (GitHub Container Registry)
- [ ] Настроить push image в GHCR
- [ ] Добавить version tags по commit SHA
- [ ] Проверить загрузку image на VPS
Готово, когда: GitHub Actions публикует Docker image в registry

## День 10: Автоматический deployment (2–4 ч)
- [ ] Настроить SSH credentials для GitHub Actions
- [ ] Добавить ручной approval для Production
- [ ] Реализовать pull image и docker compose up -d на VPS
- [ ] Добавить post-deploy healthcheck
- [ ] Проверить обновление приложения новым commit
Готово, когда: GitHub Actions автоматически обновляет приложение после approval

## День 11: Проверка, Kubernetes и демонстрация (2–3 ч)
- [ ] Повторить полный flow от commit до VPS
- [ ] Проверить rollback на предыдущий image
- [ ] Разобрать Kubernetes: Pod, Deployment, Service, Ingress
- [ ] При наличии времени запустить приложение в локальном kind-кластере
- [ ] Подготовить краткую демонстрацию для тимлида
Готово, когда: Готовое демо и понимание дальнейших шагов