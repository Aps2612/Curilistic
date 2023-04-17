import { Client, Account, Databases} from "appwrite";

const client = new Client()
  .setEndpoint('http://localhost/v1')
  .setProject('64378c0e2d556b26a378');


export const account = new Account(client);

export const databases = new Databases(client);

export const listCollectionId = '6439c145588081755a4c';


