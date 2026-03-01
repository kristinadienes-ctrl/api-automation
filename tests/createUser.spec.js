const { test, expect } = require('@playwright/test');
const { UsersApi } = require('../services/usersApi');
const testData = require('../data/users.json');
const { RESPONSE_TIME_LIMIT } = require('../utils/constants');
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const { createUserSchema } = require("../utils/schemas");
const ajv = new Ajv();
addFormats(ajv);
const validate = ajv.compile(createUserSchema);

test.describe('POST - Create User (Data Driven)', () => {

  for (const user of testData) {

    test(`Create user: ${user.name}`, async ({ request }) => {

      const usersApi = new UsersApi(request);

      const startTime = Date.now();
      const response = await usersApi.createUser(user);
      const duration = Date.now() - startTime;

      expect(response.status()).toBe(201);

      const body = await response.json();

      expect(body.id).toBeDefined();
      expect(body.createdAt).toBeDefined();
      expect(body.name).toBe(user.name);
      expect(body.job).toBe(user.job);
      expect(duration).toBeLessThan(RESPONSE_TIME_LIMIT);
      const isValid = validate(body);
      expect(isValid, JSON.stringify(validate.errors, null, 2)).toBe(true);
    });
  }
});
