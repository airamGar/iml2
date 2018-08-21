export class User {
    constructor(
        public _id: string,
        public name: string,
        public surname: string,
        public contact: string,
        public phone: number,
        public email: string,
        public password: string,
        public role: string,
        public image: String
    ) {}
}
