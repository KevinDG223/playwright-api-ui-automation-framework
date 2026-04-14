import {Page, Locator} from '@playwright/test'

export class AdminPage{
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginBtn: Locator
    readonly logoutBtn: Locator
    readonly messagesBtn: Locator
    readonly messageRows: Locator

    constructor(page: Page){
        this.page = page
        this.usernameInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.loginBtn = page.getByRole('button', { name: 'Login' })
        this.logoutBtn = page.getByRole('button', { name: 'Logout' })
        this.messagesBtn = page.getByRole('link', {name: 'Messages'})
        this.messageRows = page.locator('.messages .row.detail')
    }
    
    async goto(){
        await this.page.goto('https://automationintesting.online/admin')
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
    }

    async navigateToMessages(){
        await this.messagesBtn.click()
        await this.page.locator('.messages').waitFor({ state: 'visible' })
    }

    async logout(){
        await this.logoutBtn.click()
    }
}