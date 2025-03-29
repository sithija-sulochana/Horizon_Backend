export {};

export type Role = "admin";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            role?: Role;  // Correctly using the Role type here
        };
    }
}
