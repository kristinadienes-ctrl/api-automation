const { test, expect } = require('@playwright/test');
const { UsersApi } = require('../services/usersApi');

test.describe('GET - List Users', () => {

  test('Validate users response and data consistency', async ({ request }) => {

    const usersApi = new UsersApi(request);
    const response = await usersApi.listUsers(2);

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    expect(body.total).toBeDefined();

    expect(body.data[0].last_name).toBeDefined();
    expect(body.data[1].last_name).toBeDefined();

    expect(body.data.length).toBeLessThanOrEqual(body.total);

    expect(typeof body.page).toBe('number');
    expect(typeof body.per_page).toBe('number');
    expect(typeof body.total).toBe('number');
    expect(typeof body.total_pages).toBe('number');
    expect(Array.isArray(body.data)).toBe(true);

    body.data.forEach(user => {
    expect(typeof user.id).toBe('number');
    expect(typeof user.email).toBe('string');
    expect(typeof user.first_name).toBe('string');
    expect(typeof user.last_name).toBe('string');
    expect(typeof user.avatar).toBe('string');
    });
  });
});
