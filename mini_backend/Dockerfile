FROM python:3.12-alpine
WORKDIR /usr/src/mini_backend
EXPOSE 8080

COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .

WORKDIR /usr/src/