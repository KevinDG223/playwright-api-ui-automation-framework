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
* ✅ Structured and scalable project architecture

## 🧰 Tech Stack
* Framework: Playwright
* Language: TypeScript
* Testing Scope:
  * UI (E2E Testing)
  * API Testing

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

## 📈 Continuous Improvement

This framework is intentionally designed to evolve. Planned improvements include:

* 🔹 Stronger TypeScript typing (models/interfaces)
* 🔹 Test data factories for better scalability
* 🔹 Custom Playwright fixtures (test.extend)
* 🔹 More robust locator strategies (data-testid)
* 🔹 CI/CD integration (GitHub Actions)
