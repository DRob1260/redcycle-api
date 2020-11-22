FROM node:10-alpine
WORKDIR /code
COPY ui ./ui
WORKDIR ui
RUN npm ci
RUN npm run dev

FROM python:3
WORKDIR /code
COPY . ./
ENV PYTHONUNBUFFERED=1
RUN pip install -r requirements.txt
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
