FROM mcr.microsoft.com/playwright:v1.40.0-jammy

WORKDIR /app

COPY . .

RUN npm ci
RUN npx playwright install --with-deps
ENV CI=true

CMD ["npm", "test", "&&", "cp", "-r", "allure-results", "/app/allure-results"]