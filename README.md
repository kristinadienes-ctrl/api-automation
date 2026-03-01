# ReqRes API Automation – Playwright

## 📌 Overview

Automated REST API tests for https://reqres.in/ built with **Playwright (JavaScript)**.

The project demonstrates:

- Clean test architecture
- API abstraction layer
- Data-driven testing
- Response validation
- Response time verification
- JSON schema validation (AJV)
- Environment-based configuration

---

## 🛠 Tech Stack

Node.js / npm – prerequisite
Playwright – core framework
dotenv – environment variable management
AJV (and ajv-formats) – schema validation

---

## 📁 Project Structure

```
.
├── tests
│   ├── listUsers.spec.js
│   └── createUser.spec.js
├── services
│   └── usersApi.js
├── data
│   └── users.json
├── utils
│   ├── constants.js
│   ├── schemas.js
│   └── schemaValidator.js
├── playwright.config.js
├── .env
└── README.md
```

- **tests/** – Test scenarios
- **services/** – API layer (request abstraction)
- **data/** – External test data
- **utils/** – Configuration & schema validation
- **schemas.js** – JSON schema definitions
- **schemaValidator.js** – AJV validation wrapper

---

## ⚙️ Setup

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Edit `.env` file

```
API_KEY=your_reqres_api_key
```

---

## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run specific test:

```bash
npx playwright test tests/createUser.spec.js
```

View HTML report:

```bash
npx playwright show-report
```

---

## 🧪 Implemented Scenarios

### ✅ GET – List Users

- Validate status code (200)
- Validate response structure
- Assert `total`
- Assert `last_name` for first and second user
- Compare `data.length` with `total`
- Validate data types

### ✅ POST – Create User (Data-Driven)

- Validate status code (201)
- Assert `id` and `createdAt`
- Verify response matches request
- Validate response time < configured limit
- Validate response schema using AJV

Test data is stored in:

```
/data/users.json
```

---

## 🧱 Schema Validation (AJV)

The project uses **AJV** to validate API response structure against a defined JSON schema.

This ensures:

- Required fields exist
- Correct data types are returned
- No unexpected fields are present
- API contract consistency

Schema definitions are stored in:

```
/utils/schemas.js
```

---

## 🧠 Design Decisions

- API requests abstracted into service layer
- Environment variables for sensitive data
- Configurable performance threshold
- JSON schema validation for contract verification
- Clean separation of concerns
- Easily extendable structure

---

## 🚀 CI/CD Ready

Project can be executed in any pipeline using:

```bash
npx playwright test
```

---
