

export interface IStudent {
    _id:        string,
    name:       string,
    lastName:   string,
    password:   string,
    email:      string,
    state:      boolean,
    role:       string,
    country:    string,
    point:      number,

    createdAt?: string,
    updatedAt?: string
}