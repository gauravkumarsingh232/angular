export class Employee {
    constructor(private id: number, private name: string, private email: string) {}

    toString() : string {
        return `Employee [id: ${this.id}, name: ${this.name}, email: ${this.email}]`;
    }
}