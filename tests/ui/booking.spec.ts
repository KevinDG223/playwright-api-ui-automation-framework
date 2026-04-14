import { expect, test } from '@playwright/test'
import { HomePage } from '../../page-objects/homePage'

test('Booking for 15 nights', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.goto()

  await homePage.checkAvailability('02/09/2026', '17/09/2026')
  await homePage.suiteBookNowBtn.click()

  expect(homePage.nightsCount).toContainText('15 nights')

  await homePage.doReservationBtn.click()

  await homePage.completeReservation({
    firstName: 'Kevin',
    lastName: 'QaTester',
    email: 'kevin@test.com',
    phone: '123456789098765'
  })

  await expect(homePage.confirmationMsg).toBeVisible()
})

test('Should Not Allow with Missing Information', async ({ page }) => {
  const homePage = new HomePage(page)
  await homePage.goto()

  await homePage.checkAvailability('02/09/2026', '17/09/2026')
  await homePage.suiteBookNowBtn.click()

  expect(homePage.nightsCount).toContainText('15 nights')

  await homePage.doReservationBtn.click()

  await homePage.completeReservation({
    firstName: 'Kevin',
    lastName: 'QaTester',
    email: 'kevin@test.com',
    phone: ''
  })

  await expect(homePage.bookingFailureMsg).toBeVisible()
  await page.pause()

})