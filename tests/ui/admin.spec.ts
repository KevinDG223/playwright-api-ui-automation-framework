import {test, expect} from '@playwright/test'
import { AdminPage } from '../../page-objects/adminPage'

test.describe('Admin Flow Tests', () => {
    let adminPage: AdminPage
    test.beforeEach(async ({ page }) => {
        adminPage = new AdminPage(page)
        await adminPage.goto()
        await adminPage.login('admin', 'password')
        await page.waitForLoadState('networkidle')
    })

    test('Should Login Successfully', async () => {
        await expect(adminPage.logoutBtn).toBeVisible()
    })

    test('Admin Check Bookings', async() =>{
        await adminPage.navigateToMessages()
        await expect(adminPage.messageRows.first()).toBeVisible()
        
        const count = await adminPage.messageRows.count()
        expect(count).toBeGreaterThan(0)
        console.log(`Total Booking Messages: ${count}`) 
    })
})