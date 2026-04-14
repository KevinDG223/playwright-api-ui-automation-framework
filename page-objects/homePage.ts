import { Page, Locator } from '@playwright/test'

export class HomePage {
    readonly page: Page
    readonly checkInInput: Locator
    readonly checkOutInput: Locator
    readonly checkAvailabilityButton: Locator
    readonly suiteBookNowBtn: Locator
    readonly nightsCount: Locator
    readonly doReservationBtn: Locator

    readonly firstName: Locator
    readonly lastName: Locator
    readonly email: Locator
    readonly phone: Locator
    readonly reserveNowBtn: Locator
    readonly confirmationMsg: Locator
    readonly bookingFailureMsg: Locator

    constructor( page: Page){
        this.page = page
        this.checkInInput = page.locator('.form-control').nth(0)
        this.checkOutInput = page.locator('.form-control').nth(1)
        this.checkAvailabilityButton = page.getByRole('button', { name: 'Check Availability' })
        this.suiteBookNowBtn = page.getByText('Book now').nth(2)
        this.nightsCount = page.locator('span').filter({ hasText: 'nights' })
        this.doReservationBtn = page.locator('#doReservation')

        this.firstName = page.locator('.room-firstname')
        this.lastName = page.locator('.room-lastname')
        this.email = page.locator('.room-email')
        this.phone = page.locator('.room-phone')
        this.reserveNowBtn = page.getByText('Reserve Now')
        this.confirmationMsg = page.getByText('Booking Confirmed')
        this.bookingFailureMsg = page.getByText('must not be empty')
    }

    async goto(){
        await this.page.goto('https://automationintesting.online')
    }

    async checkAvailability(checkIn: string, checkOut: string){
        await this.checkInInput.fill(checkIn)
        await this.checkOutInput.fill(checkOut)
        await this.checkAvailabilityButton.click()
    }

    async completeReservation(data: {firstName: string, lastName: string, email: string, phone: string}){
        await this.firstName.fill(data.firstName)
        await this.lastName.fill(data.lastName)
        await this.email.fill(data.email)
        await this.phone.fill(data.phone)
        await this.reserveNowBtn.click()
    }
}