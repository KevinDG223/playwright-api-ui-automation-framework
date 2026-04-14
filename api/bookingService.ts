import { APIRequestContext } from "@playwright/test"

export class BookingService {
    readonly request: APIRequestContext
    readonly baseUrl: string = 'https://restful-booker.herokuapp.com'

    constructor(request: APIRequestContext) {
        this.request = request
    }

    async getAllBooking() {
        return await this.request.get(`${this.baseUrl}/booking`)
    }

    async createBooking(bookingData: object) {
        return await this.request.post(`${this.baseUrl}/booking`, {
            data: bookingData,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    }

    async getBookingById(id: number) {
        return await this.request.get(`${this.baseUrl}/booking/${id}`)
    }

    async updateBooking(id: number, bookingData: object, token: string) {
        return await this.request.put(`${this.baseUrl}/booking/${id}`, {
            data: bookingData,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            }
        })
    }

    async createToken(user: string, pass: string) {
        const response = await this.request.post(`${this.baseUrl}/auth`, {
            data: {
                username: user,
                password: pass
            },
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const body = await response.json()
        return body.token
    }

    async deleteBooking(id: number, token: string) {
        return await this.request.delete(`${this.baseUrl}/booking/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            }
        })
    }
}