#!/usr/bin/env bash

set -e

HOST=${HOST:-0.0.0.0}
PORT=${PORT:-8000}

python manage.py makemigrations --noinput
python manage.py migrate --noinput
python manage.py collectstatic --noinput

exec gunicorn --bind "${HOST}:${PORT}" --workers ${GUNICORN_WORKERS} --threads ${GUNICORN_THREADS} --timeout ${GUNICORN_TIMEOUT} --reload config.wsgi:application
