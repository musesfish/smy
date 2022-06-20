#!/bin/bash
python manage.py mikemigrations
python manage.py migrate
python manage.py runserver
