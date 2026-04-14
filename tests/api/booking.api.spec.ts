import { test, expect } from '@playwright/test'
import { BookingService } from '../../api/bookingService'

test.describe('Booking API Suite', () => {
    let bookingService: BookingService
    let token: string

    test.beforeAll(async ({ playwright }) => {
        const requestContext = await playwright.request.newContext()
        bookingService = new BookingService(requestContext)

        token = await bookingService.createToken('admin', 'password123')
    })

    test('Should get all bookings', async () => {
        const response = await bookingService.getAllBooking()
        expect(response.status()).toBe(200)

        const body = await response.json()
        expect(body.length).toBeGreaterThan(0)
    })

    test('Should create a new booking', async () => {
        const newBooking = {
            firstname: "Kevin",
            lastname: 'API Test',
            totalprice: 1000,
            depositpaid: true,
            bookingdates: {
                checkin: '2026-09-02',
                checkout: '2026-09-17'
            },
            additionalneeds: 'Late Checkout'
        }

        const response = await bookingService.createBooking(newBooking)
        expect(response.status()).toBe(200)
        const body = await response.json()

        expect(body).toHaveProperty('bookingid')
        expect(body.booking.firstname).toBe('Kevin')
        expect(body.booking.lastname).toBe('API Test')
    })

    test('should delete a created booking', async () => {
        const newBooking = {
            firstname: "Kevin",
            lastname: 'API Test',
            totalprice: 1000,
            depositpaid: true,
            bookingdates: {
                checkin: '2026-09-02',
                checkout: '2026-09-17'
            },
            additionalneeds: 'None'
        }
        const createResponse = await bookingService.createBooking(newBooking)
        const body = await createResponse.json()
        const bookingId = body.bookingid

        const deleteResponse = await bookingService.deleteBooking(bookingId, token)

        expect(deleteResponse.status()).toBe(201)

        const checkResponse = await bookingService.getBookingById(bookingId)
        expect(checkResponse.status()).toBe(404)
    })

    test('Should update a booking', async () => {
        const initialBooking = {
            firstname: "Kevin",
            lastname: 'Before Update',
            totalprice: 1000,
            depositpaid: true,
            bookingdates: {
                checkin: '2026-09-02',
                checkout: '2026-09-17'
            },
            additionalneeds: 'None'
        }
        const createResponse = await bookingService.createBooking(initialBooking)
        const { bookingid } = await createResponse.json()

        const updatedData = {
            ...initialBooking,
            lastname: 'After Update',
            totalprice: 500
        }
        const updateResponse = await bookingService.updateBooking(bookingid, updatedData, token)
        expect(updateResponse.status()).toBe(200)

        const body = await updateResponse.json()
        expect(body.lastname).toBe('After Update')
        expect(body.totalprice).toBe(500)
    })
})