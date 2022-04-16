import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

const adminApp = admin.initializeApp();
const adminAuth = adminApp.auth();

export const deleteUser = functions.https.onCall(async (data, context) => {
    if (!context.auth) return { status: 'error', code: 401, message: 'Not signed in' }
    const user = data.user as UserObj;

    const userRecord = await adminAuth.getUserByEmail(user.email);
    functions.logger.log("This user is set to be deleted:", userRecord);
    await adminAuth.deleteUser(userRecord.uid)
    return ({ deleted: true });
});

export const createUser = functions.https.onCall(async (data, context) => {
    if (!context.auth) return { error: true, message: 'Not signed in' }

    functions.logger.log(`Received data: ` + JSON.stringify(data));
    const email = data.email;

    try {
        await adminAuth.createUser({ email, password: UseRandomIDGen(10) });
    } catch (error) {
        functions.logger.log(`Unable to create account for: ${email}`);
        return { error: true, message: `Unable to create account for: ${email}` };
    }

    functions.logger.log(`User created with email: ${email}`);
    return { error: false, message: `User created with email: ${email}` };
});

export const UseRandomIDGen = (len: number): string => {
    let ID = "";
    for (let i = 1; i < len; i++) {
        ID += (Math.floor(Math.random() * 8) + 1).toString();
    }
    return ID;
};

type UserObj = {
    name: string;
    email: string;
    role: "student" | "professor" | "labManager" | "admin" | null;
    projects: string[];
    orders: string[];
};
