FROM composer:2.2 AS build
WORKDIR /var/www/html/
COPY . /var/www/html/

RUN composer update

RUN composer \
    --no-ansi \
    --no-interaction \
    --optimize-autoloader \
    --no-progress \
    --no-dev \
    --profile \
    install

FROM php:8.2-apache

RUN docker-php-ext-install pdo_mysql
RUN a2enmod rewrite

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
RUN echo "ServerName laravel-app.local" >> /etc/apache2/apache2.conf

COPY --from=build /var/www/html /var/www/html

RUN chmod -R 777 /var/www/html/storage
RUN mv /var/www/html/php.ini "$PHP_INI_DIR/php.ini"

CMD [ "php", "docker/prod.php" ]
