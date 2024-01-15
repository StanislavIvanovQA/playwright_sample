FROM mcr.microsoft.com/playwright:v1.40.0-jammy

WORKDIR /app

COPY . .

RUN npm ci
RUN npx npx playwright install --with-deps

CMD ["npx", "playwright", "test", "--output=results"]
