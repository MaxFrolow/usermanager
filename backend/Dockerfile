FROM ubuntu

RUN apt update 
RUN apt-get install python3.8 -y
RUN apt install python3-pip -y

RUN mkdir /opt/backend
WORKDIR /opt/backend

COPY req.txt /opt/backend
RUN pip3 install -r req.txt

EXPOSE 8080

ENV PYTHONUNBUFFERED 1
CMD python3 manage.py runserver 0.0.0.0:8080