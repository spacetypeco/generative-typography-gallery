FROM bretfisher/jekyll-serve

RUN apt-get update && \
 apt-get install -y \
    nodejs npm

RUN curl -fsSL https://deb.nodesource.com/setup_current.x | bash - && \
 apt-get install -y nodejs
 
RUN npm install -g pug
RUN npm install -g pug-cli

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install