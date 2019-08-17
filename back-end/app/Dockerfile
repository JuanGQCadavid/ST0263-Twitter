FROM python:3.6

MAINTAINER Juan Gonzalo Quiroz Cadavid

ARG ENVSTATE='PROD'
ENV ENVSTATE $ENVSTATE

COPY . /app

WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]

