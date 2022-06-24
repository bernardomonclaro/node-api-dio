import { Pool } from "pg";

const connectionString = 'postgres://busdszzb:0d1zM2z5T1yTSARYhcJ-0hC2lBIh5-GO@kesavan.db.elephantsql.com/busdszzb';

const db = new Pool({ connectionString });

export default db;
