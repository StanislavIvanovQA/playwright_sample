FROM mcr.microsoft.com/playwright:v1.40.0-jammy

WORKDIR /app

COPY . .

RUN npm ci
RUN npx npx playwright install --with-deps
ENV CI=true

CMD ["sh", "-c", "npm test && cp -r /app/allure-results /app/allure-results"]