import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
//  Start writing Firebase Functions
//  https://firebase.google.com/docs/functions/typescript

const adminApp = admin.initializeApp();
const auth = adminApp.auth()

export const deleteUser = functions.https.onCall(async (data, context) => {
    if (!context.auth) return { status: 'error', code: 401, message: 'Not signed in' }
    const user = data.user as UserObj;

    const userRecord = await auth.getUserByEmail(user.email);
    functions.logger.log("This user is set to be deleted:", userRecord);
    await auth.deleteUser(userRecord.uid)
    return ({ deleted: true });
});

type UserObj = {
    name: string;
    email: string;
    role: "student" | "professor" | "labManager" | "admin" | null;
    projects: string[];
    orders: string[];
};
