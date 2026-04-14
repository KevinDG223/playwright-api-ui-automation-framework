# 🎭 Playwright Automation Framework (UI + API)
## 🚀 Overview

This project is a test automation framework built with Playwright and TypeScript, designed to validate both UI (End-to-End) and API layers of a web application.

It demonstrates the ability to design scalable, maintainable, and production-oriented test solutions by applying industry-standard patterns and best practices.

  ⚡ Focus: Reliability, maintainability, and real-world automation design.

## 🎯 Key Highlights
* ✅ End-to-End UI automation covering real user flows
* ✅ API testing with reusable service layer
* ✅ Page Object Model (POM) for UI abstraction
* ✅ Clean separation between UI and API test suites
* ✅ CI/CD integration with GitHub Actions
* ✅ Structured and scalable project architecture

## 🧰 Tech Stack
* Framework: Playwright
* Language: TypeScript
* Testing Scope:
  * UI (E2E Testing)
  * API Testing
 
## CI/CD: 
* GitHub Actions

### Design Patterns:
* Page Object Model (POM)
* Service Layer (API abstraction)

## 🧪 What is Covered?

### 🔹 API Testing
  * Retrieve all bookings
  * Create new bookings
  * Update existing bookings
  * Delete bookings
  * Authentication via token

### 🔹 UI Testing (E2E)
* Complete booking flow (search → select → reserve)
* Admin authentication
* Booking/message validation
* Negative scenario (form validation errors)

# 🧱 Architecture & Design

## 🔸 Page Object Model (POM)

All UI interactions are encapsulated into dedicated classes:

* HomePage
* AdminPage
* BasePage

✔ Improves readability, reusability, and maintenance

✔ Keeps tests clean and focused on behavior

## 🔸 API Service Layer

All HTTP requests are handled through a centralized service:

* BookingService

✔ Separates test logic from API implementation

✔ Enables reusable and maintainable API interactions

## 🔄 CI/CD Integration

This project includes a GitHub Actions pipeline that:

* Installs dependencies
* Installs Playwright browsers
* Executes all test suites (UI + API)
* Generates test reports

✔ Ensures code quality on every push

✔ Enables automated regression testing

✔ Simulates real-world team workflows

## ▶️ Getting Started
### Install dependencies
npm install
### Install Playwright browsers
npx playwright install
### Run all tests
npx playwright test
### Run UI tests only
npx playwright test tests/ui
### Run API tests only
npx playwright test tests/api

## 📊 Reporting

View test execution results with:

npx playwright show-report

✔ Includes execution traces, logs, and failure insights

💡 Why This Project Matters

This project reflects practical, job-ready skills:

* Designing automation frameworks (not just writing tests)
* Handling both UI and API validation layers
* Applying clean architecture and separation of concerns
* Integrating automation into CI/CD pipelines
* Writing maintainable and scalable test code
